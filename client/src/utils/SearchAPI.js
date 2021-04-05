import Packs from "../packs.json";

export default {
	search: function (input) {
		let query = input.toLowerCase().trim();
		let res = [];
		if (!query) {
			res = Packs;
		} else {
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
