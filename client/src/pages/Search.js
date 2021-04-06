import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core/";
import Details from "../components/Details";
import { makeStyles } from "@material-ui/core/styles";
import Packs from "../packs.json";
import API from "../utils/SearchAPI";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";

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
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(12, 1fr)",
		gridGap: theme.spacing(3),
	},
}));

function Search() {
	const classes = useStyles();
	const location = useLocation();
	const [results, setResults] = useState(Packs);
	const { user, isAuthenticated, isLoading } = useAuth0();

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

	if (isAuthenticated) {
		return (
			<div style={{ height: "100%" }}>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item sm={11} lg={8}>
						<SearchBar />
					</Grid>
				</Grid>
				<Grid container direction="row" justify="center" alignItems="center">
					{results.map((result) => (
						<Grid item>
							<Details
								id={result.id}
								key={result.id}
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
	} else {
		return <Login />;
	}
}

export default Search;
