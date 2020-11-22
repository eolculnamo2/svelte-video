<script lang="ts">
	import shaka from 'shaka-player/dist/shaka-player.compiled.js'
	import { onMount } from 'svelte';
	import Text from './components/overlays/Text.svelte';

	export let name: string;
	export let textOverlay: string = "Test Text Overlay";
	
	let videoContainer: HTMLDivElement;
	let videoComponent: HTMLVideoElement;

	onMount( async () => {
		const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
		const player = new shaka.Player(videoComponent);
		player.addEventListener('error', e => console.error(e));

		// load manifest
		try {
			await player.load(manifestUri);
		} catch(e) {
			console.error('Webplayer failed to load ', e)
		}
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div class="video-container" bind:this={videoContainer}>
		<video 
			width="640"
			class="shaka-video"
			bind:this={videoComponent}
			autoplay
			controls
			poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
		/>
		{#if textOverlay}
			<Text text={textOverlay} />
		{/if}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.video-container {
		position: relative;
		display: inline-block;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
