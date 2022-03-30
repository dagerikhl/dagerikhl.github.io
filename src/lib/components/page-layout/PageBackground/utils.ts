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
import { tweened } from "svelte/motion";
import type { TweenedConfig } from "$lib/types/TweenedConfig";
import type { TweenedOptions } from "$lib/types/TweenedOptions";
import { pluck, rollResult } from "$lib/utils/chance";

export const createConfigParameterOptions = <T>(
	interval: number,
	pauseChance = 0.8,
	minPause = 0,
	maxPause = 300,
): TweenedOptions<T> => ({
	duration:
		interval -
		rollResult([
			{ chance: pauseChance, result: minPause + Math.random() * maxPause },
			{ chance: 1 - pauseChance, result: 0 },
		]),
	easing: pluck([
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
	]),
});

export const createConfigParameter = <T>(initialValue: T, interval: number): TweenedConfig<T> => ({
	initialValue,
	config: createConfigParameterOptions(interval),
});

export const createParameterStore = ({ initialValue, config }) => tweened(initialValue, config);

export const getOffsetAngle = (
	angle: number,
	minOffset = 20,
	maxOffset = 80,
	extraOffset = 60,
	extraOffsetChance = 0.2,
): number => {
	const extraAngle = rollResult(
		[
			{ chance: extraOffsetChance, result: extraOffset },
			{ chance: 1 - extraOffsetChance, result: 0 },
		],
		0,
	);

	const newAngle = angle + minOffset + Math.random() * (maxOffset - minOffset) + extraAngle;

	// Modulo number if it gets too large, to reset it to a normal 360 degree range
	if (newAngle > 36000000) {
		return newAngle % 360;
	}

	return newAngle;
};
