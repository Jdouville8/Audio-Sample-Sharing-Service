import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core/";
import Details from "../components/Details";
import { makeStyles } from "@material-ui/core/styles";
import Packs from "../packs.json";
import API from "../utils/SearchAPI";
import { useLocation } from "react-router-dom";

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

function Search() {
	const classes = useStyles();
	const location = useLocation();
	const [results, setResults] = useState(Packs);

	useEffect(() => {
		if (location.state.query !== undefined) {
			setResults(API.search(location.state.query));
		} else {
			setResults(API.search());
		}
	}, [location]);

	const onChange = (e) => {
		setResults(API.search(e.target.value));
	};

	return (
		<div style={{ height: "100vh" }}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item sm={11} lg={8}>
					<div className={classes.root}>
						<TextField
							id="search"
							style={{ margin: 8 }}
							placeholder="Search"
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							onChange={onChange}
						/>
					</div>
				</Grid>
			</Grid>
			<Grid container direction="row" justify="center" alignItems="center">
				{results.map((result) => (
					<Grid item>
						<Details
							src={result.src}
							title={result.title}
							artist={result.artist}
							overview={result.overview}
							dlUrl={result.dlUrl}
							audioSrc={result.audioSrc}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default Search;
