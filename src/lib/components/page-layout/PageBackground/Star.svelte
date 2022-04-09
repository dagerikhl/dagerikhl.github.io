<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import Blip from "$lib/components/page-layout/PageBackground/Blip.svelte";
	import type { BlipProps } from "$lib/components/page-layout/PageBackground/BlipProps";
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
	export let color: string;
	export let blipsCount = 10;

	interface Config {
		angle: TweenedConfig<number>;
		distance: TweenedConfig<number>;
		scale: TweenedConfig<number>;
	}

	const MIN_DISTANCE = 100;
	const MAX_DISTANCE = 400;
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
--color: ${color};\
\
transform: translate(${x}px, ${y}px) scale(${$scaleStore});\
`;

	const BLIPS_CONFIG: { count: number; props: BlipProps } = {
		count: blipsCount,
		props: { interval: interval / 2, minDistance: 10, maxDistance: 100 },
	};

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
					{ chance: 0.8, result: 0.3 + Math.random() * 2.2 },
					{ chance: 0.1, result: 0 },
					{ chance: 0.1, result: 5 },
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

<div class="star" {style}>
	{#each Array(BLIPS_CONFIG.count).fill(BLIPS_CONFIG) as { props: { interval, minDistance, maxDistance } }}
		<Blip {interval} {minDistance} {maxDistance} />
	{/each}
</div>

<style lang="scss">
	.star {
		--size: 50px;

		position: absolute;
		top: calc(50% - var(--size) / 2);
		left: calc(50% - var(--size) / 2);
		height: var(--size);
		width: var(--size);
		border-radius: 100%;
		opacity: 1;
		background-color: var(--color);
		box-shadow: 0 0 30px 20px var(--color);
		overflow: visible;
	}
</style>
