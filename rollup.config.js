import jspm from 'rollup-plugin-jspm';
import babel from 'rollup-plugin-babel';

export default {
  // Leading "./" still important here
  input: ['./app/main.js'],
  output: {
    dir: 'dist/rollup',
    format: 'system'
  },
  plugins: [jspm({
    env: {
      node: true,
      production: true
    }
  }), babel({
    exclude: 'jspm_packages/**'
  })]
};