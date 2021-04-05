import React, { useRef, useContext } from 'react';
import PlayerContext from '../../utils/PlayerContext';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../../pages/Login';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 1200,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 204,
		height: 220,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
	type: {
		width: 960,
	},
	textColor: {
		color: 'violet',
	},
}));

export default function Details(props) {
	const history = useHistory();
	const goToLoginPage = () => navigate('/login');
	const { isAuthenticated, user } = useAuth0();
	const classes = useStyles();
	const theme = useTheme();
	const [expanded, setExpanded] = React.useState(false);
	const [favoriteColor, setFavoriteColor] = React.useState(false);

	const changePlayerContext = useContext(PlayerContext);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const buttonRef = useRef(null);

	const handleFavClick = (e) => {
		e.preventDefault();

		if (!favoriteColor) {
			setFavoriteColor(true);
		} else {
			setFavoriteColor(false);
		}

		const email = user.email;
		const id = user.sub;
		console.log(email);
		console.log(id);
		const fav = buttonRef.id;
		const options = {
			headers: {
				Authorization: process.env.REACT_APP_AUTH_TOKEN,
			},
		};
		axios
			.patch(
				`https://wavmovers.us.auth0.com/api/v2/users/${id}`,
				{
					user_metadata: { favorites: ['update metadata is working!'] },
				},
				options
			)
			.then(console.log('post success'));
	};

	const handlePlayClick = (e) => {
		e.preventDefault();

		let audioSrc = props.audioSrc;
		let audioTitle = `${props.title} by ${props.artist}`;

		console.log(audioSrc);
		console.log(audioTitle);

		changePlayerContext(audioSrc, audioTitle);

		// send audioSrc value to audio player in footer component
	};

	const handleDownload = (e) => {
		// e.preventDefault();
		console.log();
		// const data = file
		if (isAuthenticated) {
			// THIS URL MUST CHANGE DYNAMICALLY
			const fileName = props.dlUrl;
			window.location.href =
				'https://wavmovers.herokuapp.com/api/files/' + fileName;
		} else history.push('/login');
	};

	return (
		<div>
			<Card
				className={classes.root}
				style={{
					marginTop: '15px',
					marginBottom: '15px',
					backgroundColor: `rgba(0,0,0,.7)`,
				}}
			>
				<Grid container>
					<Grid item>
						<CardMedia
							className={classes.cover}
							image={props.src}
							title={props.title}
						/>
					</Grid>
					<Grid item>
						<CardHeader
							title={props.title}
							subheader={props.artist}
							className={classes.textColor}
							subheaderTypographyProps={{ color: 'violet' }}
						/>
						<CardContent>
							<Typography
								className={(classes.type, classes.textColor)}
								variant="body2"
								component="p"
							>
								{props.overview}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="play/pause" onClick={handlePlayClick}>
								<PlayArrowIcon
									className={(classes.playIcon, classes.textColor)}
								/>
							</IconButton>
							<IconButton
								aria-label="add to favorites"
								onClick={handleFavClick}
								id={props.key}
								ref={buttonRef}
								style={!favoriteColor ? { color: 'grey' } : { color: 'red' }}
							>
								<FavoriteIcon />
							</IconButton>
							{/* <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton> */}
							<IconButton
								aria-label="Download"
								onClick={handleDownload}
								className={classes.textColor}
							>
								<GetAppIcon />
							</IconButton>
						</CardActions>

						{/* <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {props.trackList}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="previous">
                  {theme.direction === "rtl" ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>

                <IconButton aria-label="next">
                  {theme.direction === "rtl" ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </div>
            </Collapse> */}
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
