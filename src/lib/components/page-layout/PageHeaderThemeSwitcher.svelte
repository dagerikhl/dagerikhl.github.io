<script lang="ts">
	import themeStore, { setTheme } from "svelte-themes";
	import { browser } from "$app/env";
	import { ICONS } from "$lib/constants/ICONS";
	import { THEMES } from "$lib/constants/style/THEMES";
	import Switch from "$lib/components/design/inputs/Switch.svelte";
	import Icon from "$lib/components/design/icons/Icon.svelte";
	import type { SwitchChangeEventProps } from "$lib/components/design/inputs/SwitchProps";

	$: userPrefersDarkMode =
		browser && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	$: isDarkTheme =
		!$themeStore.theme || $themeStore.theme === THEMES.System
			? userPrefersDarkMode
			: $themeStore.theme === THEMES.Dark;

	const handleChangeTheme = ({ detail: { checked } }: CustomEvent<SwitchChangeEventProps>) => {
		if (checked) {
			setTheme(THEMES.Dark);
		} else {
			setTheme(THEMES.Light);
		}
	};
</script>

<label class="switcher" for="theme-switcher">
	<Icon icon={ICONS.faMoon} />

	<Switch id="theme-switcher" checked={isDarkTheme} on:change={handleChangeTheme} />
</label>

<style lang="scss">
	.switcher {
		grid-area: theme;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
