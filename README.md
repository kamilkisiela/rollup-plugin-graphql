# This plugin is deprecated since one of its fork is now part of the official Rollup plugins, see [`@rollup/plugin-graphql`](https://www.npmjs.com/package/@rollup/plugin-graphql).


# rollup-plugin-graphql

Convert GraphQL files to ES6 modules:

```js
// import a GraphQL Document from a GraphQL file,
import schema from './schema.graphql';
```


## Installation

```bash
npm install --save-dev rollup-plugin-graphql
```


## Usage

```js
import { rollup } from 'rollup';
import graphql from 'rollup-plugin-graphql';

rollup({
  entry: 'main.js',
  plugins: [
    graphql()
  ]
});
```


## License

MIT
