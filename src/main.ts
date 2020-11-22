import App from './App.svelte';

// @ts-ignore
const entryPoint = process.env.IS_PROD ? document.getElementById('svelte-video') : document.body;

const app = new App({
	target: entryPoint,
	props: {
		name: 'world'
	}
});

export default app;