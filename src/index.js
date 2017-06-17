import {
  createFilter
} from 'rollup-pluginutils';
import loader from 'graphql-tag/loader';

import toESModules from './toESModules';

export default function graphql(options = {}) {
  // path filter
  const filter = createFilter(options.include, options.exclude);
  // only .graphql and .gql files
  const filterExt = /\.(graphql|gql)$/i;

  return {
    name: 'graphql',
    transform(source, id) {
      if (!filter(id)) return null;
      if (!filterExt.test(id)) return null;

      // XXX: this.cachable() in graphql-tag/loader
      const code = toESModules(loader.call({
        cacheable() {}
      }, source));

      return {
        code
      };
    }
  };
}