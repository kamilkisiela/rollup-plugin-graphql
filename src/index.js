const { createFilter } = require('rollup-pluginutils');
const gql = require('graphql-tag');

export default function graphql (options = {}) {
	// path filter
	const filter = createFilter(options.include, options.exclude);
	// only .graphql and .gql files
	const filterExt = /\.(graphql|gql)$/i;

	return {
		name: 'graphql',
		transform (source, id) {
			// filters
			if (!filter(id)) return null;
			if (!filterExt.test(id)) return null;

			// parse it
			const doc = gql(source);

			// result
			const code = `
				const doc = ${JSON.stringify(doc)};
				doc.loc.source = ${JSON.stringify(doc.loc.source)};
				export default doc;
  		`;
			const result = { code };

			// return it
			return result;
		}
	};
}