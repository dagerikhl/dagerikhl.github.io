import {
	backInOut,
	bounceInOut,
	circInOut,
	cubicInOut,
	elasticInOut,
	expoInOut,
	quadInOut,
	quartInOut,
	quintInOut,
	sineInOut,
} from "svelte/easing";
import type { EasingFunction } from "svelte/transition";
import { pluck } from "$lib/utils/chance";

export const pluckRandomEasing = (enableEasing?: boolean): EasingFunction =>
	enableEasing
		? pluck([
				backInOut,
				bounceInOut,
				circInOut,
				cubicInOut,
				elasticInOut,
				expoInOut,
				quadInOut,
				quartInOut,
				quintInOut,
				sineInOut,
		  ])
		: (t) => t;
