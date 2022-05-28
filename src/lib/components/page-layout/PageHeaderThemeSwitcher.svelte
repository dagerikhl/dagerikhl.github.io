<script lang="ts">
	import { faMoon } from "@fortawesome/free-regular-svg-icons";
	import { fade } from "svelte/transition";
	import themeStore, { setTheme } from "svelte-themes";
	import { THEMES } from "$lib/constants/style/THEMES";
	import Switch from "$lib/components/design/inputs/Switch.svelte";
	import Icon from "$lib/components/design/icons/Icon.svelte";
	import type { SwitchChangeEventProps } from "$lib/components/design/inputs/SwitchProps";
	import { checkIsLightTheme } from "$lib/utils/theme";
	import { getIsMountedStore } from "../../utils/lifecycle/mounting";

	$: isLightTheme = checkIsLightTheme($themeStore.theme);

	const handleChangeTheme = ({ detail: { checked } }: CustomEvent<SwitchChangeEventProps>) => {
		if (checked) {
			setTheme(THEMES.Light);
		} else {
			setTheme(THEMES.Dark);
		}
	};

	const isMounted = getIsMountedStore();
</script>

{#if $isMounted}
	<label class="switcher" for="theme-switcher" in:fade>
		<Icon icon={faMoon} />

		<Switch id="theme-switcher" checked={isLightTheme} on:change={handleChangeTheme} />
	</label>
{/if}

<style lang="scss">
	.switcher {
		grid-area: theme;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}
</style>
