<script lang="ts">
	import { onMount } from "svelte";
	import { scale } from "svelte/transition";
	import BlackHole from "$lib/components/page-layout/PageBackground/BlackHole.svelte";
	import type { BlackHoleProps } from "$lib/components/page-layout/PageBackground/BlackHoleProps";
	import BlipCss from "$lib/components/page-layout/PageBackground/BlipCss.svelte";
	import Star from "$lib/components/page-layout/PageBackground/Star.svelte";
	import type { StarProps } from "$lib/components/page-layout/PageBackground/StarProps";
	import Sun from "$lib/components/page-layout/PageBackground/Sun.svelte";
	import type { SunProps } from "$lib/components/page-layout/PageBackground/SunProps";
	import type { CelestialConfig } from "../../../types/CelestialConfig";
	import { getVarianceFactor } from "../../../utils/maths";

	const INTERVAL = 5000;

	const SUN_CONFIG: SunProps = { interval: INTERVAL };
	const STAR_CONFIGS: StarProps[] = [
		{ interval: INTERVAL, color: "#ffffff" },
		{ interval: INTERVAL, color: "#ffffff" },
		{ interval: INTERVAL, color: "#ffffff" },
	];
	const BLACK_HOLE_CONFIG: BlackHoleProps = { interval: INTERVAL / 2 };

	let isInited = false;

	onMount(() => {
		isInited = true;
	});

	let tick = -1;
	setInterval(() => {
		tick++;
	}, INTERVAL);

	const makeBlipConfig = (): CelestialConfig => ({
		angle: {
			start: Math.random() * 360,
			end: 45 + getVarianceFactor(15),
			randomEasing: true,
		},
		distance: {
			base: 300,
			variance: 200,
			randomEasing: true,
		},
		scale: {
			base: 1,
			variance: 2,
			randomEasing: true,
		},
	});
	const BLIP_CONFIGS: CelestialConfig[] = Array(10).fill(null).map(makeBlipConfig);
</script>

{#key isInited}
	<div class="container" aria-hidden="true" in:scale={{ duration: INTERVAL }}>
		<!--	<Sun interval={SUN_CONFIG.interval} />-->

		<!--{#each STAR_CONFIGS as { interval, color }}-->
		<!--	<Star {interval} {color} />-->
		<!--{/each}-->

		{#key tick}
			{#each BLIP_CONFIGS as config}
				<BlipCss interval={INTERVAL} {tick} {config} />
			{/each}
		{/key}

		<!--	<BlackHole interval={BLACK_HOLE_CONFIG.interval} />-->
	</div>
{/key}

<style lang="scss">
	.container {
		position: relative;
		height: 100%;
		width: 100%;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
		opacity: 0.7;
	}
</style>
