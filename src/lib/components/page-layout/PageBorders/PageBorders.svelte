<script lang="ts">
	import { fly } from "svelte/transition";
	import themeStore from "svelte-themes";
	import { getIsMountedStore } from "$lib/utils/lifecycle/mounting";
	import { checkIsLightTheme } from "$lib/utils/theme";

	$: isLightTheme = checkIsLightTheme($themeStore.theme);

	const isMounted = getIsMountedStore();
</script>

{#if $isMounted}
	<div
		class="border right"
		class:light={isLightTheme}
		class:dark={!isLightTheme}
		in:fly={{ x: 200, duration: 3000 }}
	/>
	<div
		class="border left"
		class:light={isLightTheme}
		class:dark={!isLightTheme}
		in:fly={{ x: -200, duration: 3000 }}
	/>
{/if}

<style lang="scss">
	@use "sass:math";

	// Keep in sync with --border-width, but without `px`
	$slice: 350;

	.border {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: var(--border-content-width) solid;
		pointer-events: none;
	}

	.right {
		border-image-slice: 0 $slice 0 0;
		border-image-width: 0 var(--border-content-width) 0 0;

		&.light {
			border-image-source: url("$lib/assets/images/tree-layout/right-light.png");
		}
		&.dark {
			border-image-source: url("$lib/assets/images/tree-layout/right-dark.png");
		}
	}

	.left {
		border-image-slice: 0 0 0 $slice;
		border-image-width: 0 0 0 var(--border-content-width);

		&.light {
			border-image-source: url("$lib/assets/images/tree-layout/left-light.png");
		}
		&.dark {
			border-image-source: url("$lib/assets/images/tree-layout/left-dark.png");
		}
	}
</style>
