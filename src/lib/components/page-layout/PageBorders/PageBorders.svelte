<script lang="ts">
	import themeStore from "svelte-themes";
	import { checkIsLightTheme } from "$lib/utils/theme";

	$: isLightTheme = checkIsLightTheme($themeStore.theme);
</script>

<div class="border right" />
<div class="border left" />

{#if isLightTheme}
	<div class="border right light-theme-overlay" />
	<div class="border left light-theme-overlay" />
{/if}

<style lang="scss">
	@use "sass:math";

	$imageHeight: 300px;
	$imageWidth: 150px;
	$borderWidth: max($imageWidth, 20vw);
	$borderSlice: math.div($imageWidth, 1px);

	.border {
		position: absolute;
		top: var(--height-header);
		right: 0;
		bottom: var(--height-footer);
		left: 0;
		border: $borderWidth solid;
		z-index: -1;
		filter: var(--border-filter);
	}

	.right {
		border-image-source: url("$lib/assets/images/tree-layout/right.png");
		border-image-slice: 0 $borderSlice 0 0;
		border-image-width: 0 $borderWidth 0 0;
	}

	.left {
		border-image-source: url("$lib/assets/images/tree-layout/left.png");
		border-image-slice: 0 0 0 $borderSlice;
		border-image-width: 0 0 0 $borderWidth;
	}

	.light-theme-overlay {
		filter: saturate(0) brightness(10000%) opacity(70%);
	}
</style>
