<script lang="ts">
	import themeStore from "svelte-themes";
	import { THEMES } from "$lib/constants/style/THEMES";
	import type { Theme } from "$lib/types/style/Theme";

	interface ThemeOption {
		name: string;
		value: Theme;
	}

	const themes: ThemeOption[] = Object.entries(THEMES).map(([name, value]) => ({ name, value }));
</script>

<select bind:value={$themeStore.theme}>
	{#each themes as theme (theme.value)}
		<option value={theme.value}>{theme.name}</option>
	{/each}
</select>

<style lang="scss">
	.switcher {
		grid-area: theme;
	}
</style>
