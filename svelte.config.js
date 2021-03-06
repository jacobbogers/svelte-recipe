import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';


const config = {
	kit: {
		adapter: adapter(),
		amp: false,
		appDir: '_app',
		files: {
			assets: 'static',
			//hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker.ts',
			template: 'src/app.html'
		},
		floc: false,
		hydrate: true,
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		},
		router: true,
		ssr: true,
		target: '#svelte',
		trailingSlash: 'never'
	},
	preprocess: preprocess({
		replace: [
			['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)]
		],
		typescript: {
			tsconfigFile: './tsconfig.app.json',
			handleMixedImports: true
		}
	}),
};

export default config;
