import Packs from "../packs.json";

export default {
	search: function (input) {
		let res = [];
		if (!input || input == undefined) {
			res = Packs;
		} else {
			let query = input.toLowerCase().trim();
			const filtered = Packs.filter(
				(pack) =>
					pack.title.toLowerCase().includes(query) ||
					pack.artist.toLowerCase().includes(query) ||
					pack.overview.toLowerCase().includes(query)
			);
			res = filtered;
		}
		return res;
	},
};
