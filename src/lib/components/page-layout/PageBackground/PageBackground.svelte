<script lang="ts">
	import BlackHole from "$lib/components/page-layout/PageBackground/BlackHole.svelte";
	import type { BlackHoleProps } from "$lib/components/page-layout/PageBackground/BlackHoleProps";
	import Blip from "$lib/components/page-layout/PageBackground/Blip.svelte";
	import Star from "$lib/components/page-layout/PageBackground/Star.svelte";
	import type { StarProps } from "$lib/components/page-layout/PageBackground/StarProps";
	import Sun from "$lib/components/page-layout/PageBackground/Sun.svelte";
	import type { SunProps } from "$lib/components/page-layout/PageBackground/SunProps";

	const INTERVAL = 5000;

	const SUN_CONFIG: SunProps = { interval: INTERVAL };
	const STAR_CONFIGS: StarProps[] = [
		{ interval: INTERVAL, color: "#ffffff" },
		{ interval: INTERVAL, color: "#ffffff" },
		{ interval: INTERVAL, color: "#ffffff" },
	];
	const BLIPS_CONFIG = { count: 20, interval: INTERVAL * 2 };
	const BLACK_HOLE_CONFIG: BlackHoleProps = { interval: INTERVAL / 2 };
</script>

<div class="container" aria-hidden="true">
	<Sun interval={SUN_CONFIG.interval} />

	{#each STAR_CONFIGS as { interval, color }}
		<Star {interval} {color} />
	{/each}

	{#each Array(BLIPS_CONFIG.count).fill(BLIPS_CONFIG) as { interval }}
		<Blip {interval} />
	{/each}

	<BlackHole interval={BLACK_HOLE_CONFIG.interval} />
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
		opacity: 0.7;
	}
</style>
