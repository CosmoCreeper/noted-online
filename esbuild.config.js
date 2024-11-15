import { build } from 'esbuild';
import postcssPlugin from '@deanc/esbuild-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [
    postcssPlugin({
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer,
      ],
    }),
  ],
  loader: { '.tsx': 'tsx', '.css': 'css', '.mp3': 'file' },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  platform: 'browser',
  assetNames: 'assets/[name]-[hash]',
}).catch(() => process.exit(1));
