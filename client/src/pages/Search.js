import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
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
