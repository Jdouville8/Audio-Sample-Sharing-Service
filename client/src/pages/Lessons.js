import React from "react";
import { Card, Typography, CardContent, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { InlineWidget } from "react-calendly";
import CheckoutForm from '../components/CheckoutForm/index'

const useStyles = makeStyles({
	root: {
		marginTop: "19%",
	},
	cardTitle: {
		fontWeight: '20px'
	}
});

function Lessons() {
	const classes = useStyles();
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
			}}>
			<Grid container direction="row" alignItems="center" justify="center">
				<Grid item style={{ height: "700px", width: "25%" }}>
					<Card
						className={classes.root}
						variant="outlined"
						style={{ opacity: ".95", boxShadow: "5px 5px 15px grey" }}>
						<CardContent>
							<Typography style={{ opacity: "1" }} className={classes.cardTitle}>
								Are you interested in receiving technical and industry related feedback from your favorite artists in the scene?
							</Typography>	
							<br />
							<Typography>
								<b>WavMovers</b> offers 1-on-1 lesson scheduling with professional artists to give you the tools you need to create. Our artists can cover a vast array of topics including: Track arrangement, DAW Workflow, Sound design, Mixing, Mastering, DJing, Music theory, Track feedback, Industry consulting, and Artistic identity guidance
							</Typography>
							<br />
							<Typography>
								WavMovers 1-on-1 lessons will empower you to grow leaps and bounds in your musical journey through honing the skills needed to get you from the bedroom to the main stage
							</Typography>
							<br/>
							<CheckoutForm>

							</CheckoutForm>
						</CardContent>
					</Card>
				</Grid>
				<Grid item style={{ width: "60%" }}>
					<InlineWidget
						styles={{
							height: "650px",
						}}
						url="https://calendly.com/backleftmusic"
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Lessons;
