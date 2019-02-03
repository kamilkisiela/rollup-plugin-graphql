const rollup = require('rollup');
const graphql = require('..');

process.chdir(__dirname);

describe('plugin', () => {
  it('should parse a simple graphql file', async function() {
    const bundle = await rollup.rollup({
      input: 'samples/basic/index.js',
      plugins: [graphql()]
    });
    const { output: [{ code }] } = await bundle.generate({
      format: 'cjs'
    });
    const exports = {};
    const fn = new Function('exports', code);

    fn(exports);

    expect(exports.doc).toBeDefined();
    expect(exports.doc.kind).toBe('Document');
  });

  it('should include a fragment', async function() {
    const bundle = await rollup.rollup({
      input: 'samples/fragments/index.js',
      plugins: [graphql()]
    });
    const { output: [{ code }] } = await bundle.generate({
      format: 'cjs'
    });
    const exports = {};
    const fn = new Function('exports', code);

    fn(exports);

    expect(exports.doc).toBeDefined();
    expect(exports.doc.kind).toBe('Document');
    expect(exports.doc.definitions[1].name.value).toBe('HeroFragment');
  });
});
