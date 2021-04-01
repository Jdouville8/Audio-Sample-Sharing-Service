import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	card: {
		width: 300,
		height: 180,
	},
	button: {
		color: '#5e235b',
		margin: '10%'
	},
	label: {
		fontSize: '22px'
	}
}));

export default function FileSubmit() {
	const classes = useStyles();

	const [file, setFile] = useState("");

	const onChange = (e) => {
		setFile(e.target.files[0]);
	};

	const log = () => {
		console.log(file);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		
		fetch('/api/files', {
			
			method: 'POST',
			body:  formData,
			//   headers: new Headers()
		});
		
		console.log(formData)
	};

	return (
		<div
			style={{
				height: "100vh",
				marginLeft: "60%",
				marginTop: "40%",
				transform: "translate(-50%, -50%)",
				display: 'flex'
			}}>
			<Box>
			<Card
				className={classes.card}
				spacing={0}
				align="center"
				justify="center"
				p={2}>
				<CardActions>
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
						// onSubmit={onSubmit}
						enctype='multipart/form-data'
						>
						<label className={classes.label}>
							Please choose a File
						</label>
						<br />
						<TextField name="file" type="file" onChange={onChange} />
						<Button
							variant="contained"
							className={classes.button}
							// color="primary"
							// value="Upload"
							onClick={onSubmit}
							>
							Submit
						</Button>
					</form>
				</CardActions>
			</Card>
			</Box>
		</div>
	);
}
