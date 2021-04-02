import React from "react";
import { Card, Typography, CardContent, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { InlineWidget } from "react-calendly";

const useStyles = makeStyles({
	root: {
		marginTop: "5%",
	},
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
				<Grid item style={{ height: "700px", width: "300px" }}>
					<Card className={classes.root} variant="outlined">
						<CardContent>
							<Typography style={{ opacity: "1" }}>
								<b>WavMovers</b> is a cutting edge audio sample library and
								education platform aimed to enable music creators to make their
								ideas reality. All samples purchased are royalty-free, ready for
								use in any production with no copyright implications to worry
								about. In the Age of information, WavMovers is a one stop
								destination for all the tools you need to turn ideas into
								masterpieces.
							</Typography>
							<br />
							<Typography>
								Want to know more about making your own sounds and how to
								implement them in your productions? Then check out the
								educational resources tab for interactive Ableton project file
								lessons, 1-on-1 sessions with your favorite artists and links to
								free educational resources to get you started.
							</Typography>
							<br />
							<Typography>
								In the Age of information, WavMovers is a one stop destination
								for all the tools you need to turn ideas into masterpieces.
							</Typography>
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
