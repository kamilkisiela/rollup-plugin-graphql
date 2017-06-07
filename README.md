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
