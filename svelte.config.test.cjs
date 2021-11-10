const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: preprocess({tsconfigFile:'./tsconfig-jest.json'})
};