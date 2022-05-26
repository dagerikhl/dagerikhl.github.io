import { browser } from "$app/env";
import { THEMES } from "$lib/constants/style/THEMES";

export const checkIsLightTheme = (theme?: string): boolean => {
	const isDarkModePreferred =
		browser && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	const isMissingTheme = !theme;
	const isSystemTheme = theme === THEMES.System;
	const isLightTheme = theme === THEMES.Light;

	return isMissingTheme || isSystemTheme ? !isDarkModePreferred : isLightTheme;
};
