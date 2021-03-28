import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
	media: {
		height: 140,
	},
});

function Icon(props) {
	const classes = useStyles();

	return (
		<>
			<Card>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={props.img}
						title={props.title}
					/>
				</CardActionArea>
			</Card>
		</>
	);
}

export default Icon;
