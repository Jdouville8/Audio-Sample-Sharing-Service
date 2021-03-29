import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
	media: {
		width: 204,
		height: 204,
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
