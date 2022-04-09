import type { THEMES } from "$lib/constants/style/THEMES";

type Keys = keyof typeof THEMES;
export type Theme = typeof THEMES[Keys];
