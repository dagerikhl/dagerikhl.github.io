<script lang="ts">
	// TODO Refactor, optimize, and generalize so it's easier to create more stars and other effects

	import { onDestroy, onMount } from "svelte";
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
	import { degToRad, pluck } from "$lib/components/page-layout/PageBackground/utils";

	interface StarConfigAxisOptions<T> {
		delay?: number;
		duration?: number | ((from: T, to: T) => number);
		easing?: (t: number) => number;
		interpolate?: (a: T, b: T) => (t: number) => T;
	}

	interface StarConfigAxis<T> {
		default: T;
		config: StarConfigAxisOptions<T>;
	}

	interface StarConfig {
		angle: StarConfigAxis<number>;
		distance: StarConfigAxis<number>;
		scale: StarConfigAxis<number>;
	}

	const TICK_TIME = 5000;
	const MIN_DISTANCE = 100;
	const MAX_DISTANCE = 400;

	const createStarConfigAxisOptions = <T>(): StarConfigAxisOptions<T> => ({
		duration: TICK_TIME - (Math.random() < 0.8 ? Math.random() * 300 : 0),
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

	const createStarConfigAxis = <T>(value: T): StarConfigAxis<T> => ({
		default: value,
		config: createStarConfigAxisOptions(),
	});

	const STARS: StarConfig[] = [
		{
			angle: createStarConfigAxis(Math.random() * 360),
			distance: createStarConfigAxis(MIN_DISTANCE),
			scale: createStarConfigAxis(0),
		},
		{
			angle: createStarConfigAxis(Math.random() * 360),
			distance: createStarConfigAxis(MAX_DISTANCE / 2),
			scale: createStarConfigAxis(0),
		},
		{
			angle: createStarConfigAxis(Math.random() * 360),
			distance: createStarConfigAxis(MAX_DISTANCE),
			scale: createStarConfigAxis(0),
		},
	];

	const star1AngleStore = tweened(STARS[0].angle.default, STARS[0].angle.config);
	const star1DistanceStore = tweened(STARS[0].distance.default, STARS[0].distance.config);
	const star1ScaleStore = tweened(STARS[0].scale.default, STARS[0].scale.config);
	$: star1X = $star1DistanceStore * Math.cos(degToRad($star1AngleStore));
	$: star1Y = $star1DistanceStore * Math.sin(degToRad($star1AngleStore));
	$: star1Style = `transform: translate(${star1X}px, ${star1Y}px) scale(${$star1ScaleStore});`;
	const star2AngleStore = tweened(STARS[1].angle.default, STARS[1].angle.config);
	const star2DistanceStore = tweened(STARS[1].distance.default, STARS[1].distance.config);
	const star2ScaleStore = tweened(STARS[1].scale.default, STARS[1].scale.config);
	$: star2X = $star2DistanceStore * Math.cos(degToRad($star2AngleStore));
	$: star2Y = $star2DistanceStore * Math.sin(degToRad($star2AngleStore));
	$: star2Style = `transform: translate(${star2X}px, ${star2Y}px) scale(${$star2ScaleStore});`;
	const star3AngleStore = tweened(STARS[2].angle.default, STARS[2].angle.config);
	const star3DistanceStore = tweened(STARS[2].distance.default, STARS[2].distance.config);
	const star3ScaleStore = tweened(STARS[2].scale.default, STARS[2].scale.config);
	$: star3X = $star3DistanceStore * Math.cos(degToRad($star3AngleStore));
	$: star3Y = $star3DistanceStore * Math.sin(degToRad($star3AngleStore));
	$: star3Style = `transform: translate(${star3X}px, ${star3Y}px) scale(${$star3ScaleStore});`;

	const starStores = [
		{ angleStore: star1AngleStore, distanceStore: star1DistanceStore, scaleStore: star1ScaleStore },
		{ angleStore: star2AngleStore, distanceStore: star2DistanceStore, scaleStore: star2ScaleStore },
		{ angleStore: star3AngleStore, distanceStore: star3DistanceStore, scaleStore: star3ScaleStore },
	];

	let motionInterval: NodeJS.Timer;

	onMount(() => {
		motionInterval = setInterval(() => {
			for (const { angleStore, distanceStore, scaleStore } of starStores) {
				const shouldUseNewOptions = Math.random() < 0.6;
				const options = shouldUseNewOptions ? createStarConfigAxisOptions<number>() : undefined;

				angleStore.update((angle) => {
					const extraAngle = Math.random() < 0.8 ? 0 : 60;
					const newAngle = angle + Math.random() * 60 + 20 + extraAngle;
					// Modulo number if it gets too large, to reset it to a normal 360 degree range
					return newAngle > 36000000 ? newAngle % 360 : newAngle;
				}, options);

				distanceStore.set(MIN_DISTANCE + Math.random() * (MAX_DISTANCE - MIN_DISTANCE), options);

				const scaleChance = Math.random();
				let newScale;
				if (scaleChance < 0.8) {
					newScale = 0.3 + Math.random() * 2.2;
				} else if (scaleChance < 0.9) {
					// Remove star entirely
					newScale = 0;
				} else {
					// Scale up star excessively
					newScale = 5;
				}
				scaleStore.set(newScale, options);
			}
		}, TICK_TIME);
	});

	onDestroy(() => {
		clearInterval(motionInterval);
	});
</script>

<div class="container" aria-hidden="true">
	<div class="star star1" style={star1Style} />
	<div class="star star2" style={star2Style} />
	<div class="star star3" style={star3Style} />
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 100%;
		width: 100%;
		z-index: -1;
		overflow: hidden;

		.star {
			--size: 50px;
			position: absolute;
			top: calc(50% - var(--size) / 2);
			left: calc(50% - var(--size) / 2);
			height: var(--size);
			width: var(--size);
			border-radius: 100%;
			opacity: 0.8;
		}

		.star1 {
			--color: #ffffff;
			background-color: var(--color);
			box-shadow: 0 0 30px 20px var(--color);
		}
		.star2 {
			--color: #cefbff;
			background-color: var(--color);
			box-shadow: 0 0 40px 30px var(--color);
		}
		.star3 {
			--color: #ff9b70;
			background-color: var(--color);
			box-shadow: 0 0 20px 10px var(--color);
		}
	}
</style>
