<script lang="ts">
	import themeStore from "svelte-themes";
	import { checkIsLightTheme } from "$lib/utils/theme";

	$: isLightTheme = checkIsLightTheme($themeStore.theme);
</script>

<div class="border right" class:light={isLightTheme} class:dark={!isLightTheme} />
<div class="border left" class:light={isLightTheme} class:dark={!isLightTheme} />

<style lang="scss">
	@use "sass:math";

	$imageWidth: 350px;
	$borderWidth: max(50px, 5vw);
	$borderSlice: math.div($imageWidth, 1px);
	$borderOffset: $imageWidth * (math.div(-1, 50));

	.border {
		position: fixed;
		top: var(--height-header);
		right: $borderOffset;
		bottom: 0;
		left: $borderOffset;
		border: $borderWidth solid;
	}

	.right {
		border-image-slice: 0 $borderSlice 0 0;
		border-image-width: 0 $borderWidth 0 0;

		&.light {
			border-image-source: url("$lib/assets/images/tree-layout/right-light.png");
		}
		&.dark {
			border-image-source: url("$lib/assets/images/tree-layout/right-dark.png");
		}
	}

	.left {
		border-image-slice: 0 0 0 $borderSlice;
		border-image-width: 0 0 0 $borderWidth;

		&.light {
			border-image-source: url("$lib/assets/images/tree-layout/left-light.png");
		}
		&.dark {
			border-image-source: url("$lib/assets/images/tree-layout/left-dark.png");
		}
	}
</style>
