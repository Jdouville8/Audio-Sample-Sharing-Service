import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
	media: {
		width: 140,
		height: 140,
	},
});

function Icon() {
	const classes = useStyles();

	return (
		<div>
			<Card>
				<CardMedia className={classes.media} />
			</Card>
		</div>
	);
}

export default Icon;
