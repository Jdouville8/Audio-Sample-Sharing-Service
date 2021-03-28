import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	root: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 151,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia
				className={classes.media}
				image="/static/images/cards/paella.jpg"
				title="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Overview of the sound pack goes here.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>DETAILS:</Typography>
					<Typography paragraph>
						Detailed description of the sound pack goes in here !!
					</Typography>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								Live From Space
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								Mac Miller
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
							<IconButton aria-label="play/pause">
								<PlayArrowIcon className={classes.playIcon} />
							</IconButton>
							<IconButton aria-label="next">
								{theme.direction === "rtl" ? (
									<SkipPreviousIcon />
								) : (
									<SkipNextIcon />
								)}
							</IconButton>
						</div>
					</div>
				</CardContent>
			</Collapse>
		</Card>
	);
}
