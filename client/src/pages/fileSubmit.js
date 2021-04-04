import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { Box } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	"& > *": {
	// 		margin: theme.spacing(1),
	// 		width: "25ch",
	// 	},
	// },
	card: {
		margin: "auto",
	},
	button: {
		color: "#5e235b",
		margin: "10%",
	},
	label: {
		fontSize: "22px",
	},
}));

export default function FileSubmit() {
	const classes = useStyles();

	const [file, setFile] = useState("");

	const onChange = (files) => {
		setFile(files);
	};

	const log = () => {
		console.log(file);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);

		fetch("/api/files", {
			method: "POST",
			body: formData,
			//   headers: new Headers()
		});

		console.log(formData);
	};

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
			}}>
			<Card className={classes.card}>
				<DropzoneArea onChange={(files) => onChange(files)} />
				{/* <CardActions>
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
						// onSubmit={onSubmit}
						enctype="multipart/form-data">
						<label className={classes.label}>Please choose a File</label>
						<br />

						<Button
							variant="contained"
							className={classes.button}
							// color="primary"
							// value="Upload"
							onClick={onSubmit}>
							Submit
						</Button>
					</form>
				</CardActions> */}
			</Card>
		</div>
	);
}
