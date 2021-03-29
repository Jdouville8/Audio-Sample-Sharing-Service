import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
		overflow: "auto",
		height: 140,
		width: 800,
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
	const theme = useTheme();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<Grid>
				<Grid item>
					<CardHeader
						title="Shrimp and Chorizo Paella"
						subheader="September 14, 2016"
					/>

					<CardActions disableSpacing>
						<Typography variant="body2" color="textSecondary" component="p">
							Overview of the sound pack goes here.
						</Typography>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
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
				</Grid>
				<Grid item>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>DETAILS:</Typography>
							<Typography paragraph>
								Detailed description of the sound pack goes in here !!
							</Typography>

							<CardContent className={classes.details}>
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
						</CardContent>
					</Collapse>
				</Grid>
			</Grid>
		</Card>
	);
}
