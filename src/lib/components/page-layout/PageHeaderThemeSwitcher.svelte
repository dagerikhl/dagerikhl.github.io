<script lang="ts">
	// TODO Make into a prettier toggle button

	import themeStore, { setTheme } from "svelte-themes";
	import { THEMES } from "$lib/constants/style/THEMES";

	// TODO Verify that this initial value works on systems with light system theme
	$: isDarkTheme = $themeStore.theme === THEMES.Dark;

	const handleChangeTheme = ({ target }) => {
		if (target.checked) {
			setTheme(THEMES.Dark);
		} else {
			setTheme(THEMES.Light);
		}
	};
</script>

<label class="switcher">
	Dark mode
	<input type="checkbox" checked={isDarkTheme} on:change={handleChangeTheme} />
</label>

<style lang="scss">
	.switcher {
		grid-area: theme;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
