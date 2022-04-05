<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import {
		createConfigParameter,
		createConfigParameterOptions,
		createParameterStore,
		getOffsetAngle,
	} from "$lib/components/page-layout/PageBackground/utils";
	import type { TweenedConfig } from "$lib/types/TweenedConfig";
	import { rollResult } from "$lib/utils/chance";
	import { degToRad } from "$lib/utils/maths";

	export let interval: number;

	interface Config {
		angle: TweenedConfig<number>;
		distance: TweenedConfig<number>;
		scale: TweenedConfig<number>;
	}

	const MIN_DISTANCE = 150;
	const MAX_DISTANCE = 700;
	const HORIZONTAL_DISTANCE_FACTOR = 1.2;

	const CONFIG: Config = {
		angle: createConfigParameter(Math.random() * 360, interval),
		distance: createConfigParameter(MIN_DISTANCE, interval),
		scale: createConfigParameter(0, interval),
	};

	const angleStore = createParameterStore(CONFIG.angle);
	const distanceStore = createParameterStore(CONFIG.distance);
	const scaleStore = createParameterStore(CONFIG.scale);
	$: x = $distanceStore * Math.cos(degToRad($angleStore)) * HORIZONTAL_DISTANCE_FACTOR;
	$: y = $distanceStore * Math.sin(degToRad($angleStore));
	$: style = `\
transform: translate(${x}px, ${y}px) scale(${$scaleStore});\
`;

	let motionInterval: NodeJS.Timer;

	onMount(() => {
		motionInterval = setInterval(() => {
			const options = rollResult([
				{ chance: 0.6, result: createConfigParameterOptions<number>(interval) },
			]);

			angleStore.update((angle) => getOffsetAngle(angle), options);

			distanceStore.set(MIN_DISTANCE + Math.random() * (MAX_DISTANCE - MIN_DISTANCE), options);

			const newScale = rollResult(
				[
					{ chance: 0.8, result: 0.2 + Math.random() * 1.2 },
					{ chance: 0.1, result: 0 },
					{ chance: 0.1, result: 2 },
				],
				0,
			);
			scaleStore.set(newScale, options);
		}, interval);
	});

	onDestroy(() => {
		clearInterval(motionInterval);
	});
</script>

<div class="blip" {style} />

<style lang="scss">
	.blip {
		--size: 5px;
		--color: #ffffff;

		position: absolute;
		top: calc(50% - var(--size) / 2);
		left: calc(50% - var(--size) / 2);
		height: var(--size);
		width: var(--size);
		border-radius: 100%;
		opacity: 0.3;
		background-color: var(--color);
		box-shadow: 0 0 5px 3px var(--color);
	}
</style>
