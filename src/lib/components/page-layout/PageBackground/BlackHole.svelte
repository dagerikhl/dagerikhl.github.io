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

	const MIN_DISTANCE = 200;
	const MAX_DISTANCE = 300;
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
			const options = createConfigParameterOptions<number>(interval);

			angleStore.update((angle) => getOffsetAngle(angle), options);

			distanceStore.set(MIN_DISTANCE + Math.random() * (MAX_DISTANCE - MIN_DISTANCE), options);

			const newScale = rollResult(
				[
					{ chance: 0.05, result: 1 + Math.random() },
					{ chance: 0.95, result: 0 },
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

<div class="black-hole" {style} />

<style lang="scss">
	.black-hole {
		--size: 200px;
		--color: #000000;
		--shadow-color: #ffffff;

		position: absolute;
		top: calc(50% - var(--size) / 2);
		left: calc(50% - var(--size) / 2);
		height: var(--size);
		width: var(--size);
		border-radius: 100%;
		opacity: 1;
		background-color: var(--color);
		box-shadow: 0 0 10px 10px var(--shadow-color);
		outline: 4px solid var(--shadow-color);
	}
</style>
