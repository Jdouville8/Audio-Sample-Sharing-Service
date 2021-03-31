import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "../components/Icon";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details";
import { makeStyles } from "@material-ui/core/styles";
import Packs from "../packs.json";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(12, 1fr)",
		gridGap: theme.spacing(3),
	},
}));

function Search() {
	const styles = useStyles();

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

<<<<<<< HEAD
  return (
    <div style={{ height: "100vh" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={11} lg={8}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          {results.map((result) => (
            <Icon src={result.src} />
          ))}
        </Grid>
        <Grid item>
          {results.map((result) => (
            <Details
              title={result.title}
              artist={result.artist}
              overview={result.overview}
              dlUrl={result.dlUrl}
              audioSrc={result.audioSrc}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
=======
	return (
		<div style={{ height: "100vh" }}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={4}>
				<Grid item sm={11} lg={8}>
					<SearchBar />
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={4}>
				<Grid item>
					{results.map((result) => (
						<Icon key={result.id} src={result.src} />
					))}
				</Grid>
				<Grid item>
					{results.map((result) => (
						<Details
							key={result.id}
							title={result.title}
							artist={result.artist}
							overview={result.overview}
							dlUrl={result.dlUrl}
							audioSrc={result.audioSrc}
						/>
					))}
				</Grid>
			</Grid>
		</div>
	);
>>>>>>> main
}

export default Search;
