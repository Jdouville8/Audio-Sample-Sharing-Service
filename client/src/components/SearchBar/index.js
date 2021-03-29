import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
	},
}));

function SearchBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TextField
				id="standard-full-width"
				style={{ margin: 8 }}
				placeholder="Search"
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</div>
	);
}

export default SearchBar;
