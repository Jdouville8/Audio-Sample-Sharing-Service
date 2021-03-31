import React from "react";
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	Button,
	TextField,
	makeStyles,
} from "@material-ui/core";
import CoolImg from "../images/landing.png";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function Login() {
	const classes = useStyles();

	const onSubmit = () => {};

	return (
		<div style={{ height: "100vh" }}>
			<Grid>
				<Grid item lg={7}>
					<div
						style={{
							position: "absolute",
							left: "32%",
							top: "50%",
							transform: "translate(-50%, -50%)",
						}}>
						<img src={CoolImg} />
					</div>
				</Grid>
				<Grid item lg={5}>
					<div
						style={{
							position: "absolute",
							left: "77%",
							top: "50%",
							transform: "translate(-50%, -50%)",
						}}>
						<Card className={classes.root} variant="outlined">
							<form>
								<CardActions>
									<TextField
										id="outlined-basic"
										label="Username"
										variant="outlined"
									/>
									<TextField
										id="outlined-basic"
										label="Password"
										variant="outlined"
									/>
								</CardActions>
								<CardActions>
									<Button size="medium" href="/signup">
										Signup
									</Button>
									<Button
										style={{ marginLeft: "auto" }}
										size="medium"
										onClick={onSubmit}>
										Login
									</Button>
								</CardActions>
							</form>
						</Card>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Login;
