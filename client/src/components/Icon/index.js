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

function Icon(props) {
	const classes = useStyles();

	return (
		<div>
			<Card style={{ marginTop: "15px", marginBottom: "15px" }}>
				<CardMedia className={classes.media}>
					<img src={props.src} />
				</CardMedia>
			</Card>
		</div>
	);
}

export default Icon;
