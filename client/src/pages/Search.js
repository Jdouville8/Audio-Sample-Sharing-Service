import React from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "../components/Icon";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details";

function Search() {
	return (
		<div>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<SearchBar />
				</Grid>
				{/* need to map over search results and add these items dynamically */}
				<Grid item xs={2}>
					<Icon img={} title={} />
				</Grid>
				<Grid item xs={10}>
					<Details />
				</Grid>
			</Grid>
		</div>
	);
}

export default Search;
