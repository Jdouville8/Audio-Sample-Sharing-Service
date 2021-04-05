import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details";
import { makeStyles } from "@material-ui/core/styles";
import Packs from "../packs.json";

function Search() {
	const results = Packs;

	// useEffect(() => {
	// 	fetch("http://localhost:3001/api/files", {
	// 		method: "GET",
	// 	})
	// 		.then((res) => {
	// 			console.log(res);
	// 			setResults(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div style={{ height: "100vh" }}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item sm={11} lg={8}>
					<SearchBar />
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
