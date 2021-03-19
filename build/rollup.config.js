import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { version } from '../package.json';

export default {
  input  : 'src/utils.ts',
  output : {
    name      : 'my_utils',
    file      : `dist/@${version}/index.js`,
    format    : 'umd',
    sourcemap : true
  },
  plugins : [
    eslint(),
    typescript({
      tsconfigOverride : {
        compilerOptions : {
          declaration : false
        }
      }
    }),
    json(),
    babel({
      extensions   : [ '.js', '.ts' ],
      exclude      : 'node_modules/**',
      babelHelpers : 'bundled'
    }),
    terser()
  ]
};