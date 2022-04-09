<script lang="ts">
	import themeStore, { setTheme } from "svelte-themes";
	import { THEMES } from "$lib/constants/style/THEMES";
	import Switch from "$lib/components/design/inputs/Switch.svelte";
	import type { SwitchChangeEventProps } from "$lib/components/design/inputs/SwitchProps";

	// TODO Verify that this initial value works on systems with light system theme
	$: isDarkTheme = $themeStore.theme === THEMES.Dark;

	const handleChangeTheme = ({ detail: { checked } }: CustomEvent<SwitchChangeEventProps>) => {
		if (checked) {
			setTheme(THEMES.Dark);
		} else {
			setTheme(THEMES.Light);
		}
	};
</script>

<label class="switcher">
	Dark mode
	<Switch checked={isDarkTheme} on:change={handleChangeTheme} />
</label>
<Switch checked={false} />
<Switch checked={true} />

<style lang="scss">
	.switcher {
		grid-area: theme;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
