<script lang="ts">
	import shaka from 'shaka-player/dist/shaka-player.compiled.js'
	import { onMount } from 'svelte';
  import Text from './components/overlays/Text.svelte';

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

<style>
	.video-container {
		position: relative;
		display: inline-block;
	}
</style>
