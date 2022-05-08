<script lang="ts">
	import type { TransitionConfig } from "svelte/transition";
	import type { CelestialConfig } from "../../../types/CelestialConfig";
	import { getVarianceFactor } from "../../../utils/maths";
	import { pluckRandomEasing } from "../../../utils/transitions";

	export let interval: number;
	export let tick: number;
	export let config: CelestialConfig;

	interface OrbitConfig {
		delay?: number;
		duration: number;
		config: CelestialConfig;
	}
	const orbit = (
		node: Element,
		{
			delay,
			duration,
			tick,
			config: { angle: angleConfig, distance: distanceConfig, scale: scaleConfig },
		}: OrbitConfig,
	): TransitionConfig => {
		const angleEasing = pluckRandomEasing(angleConfig.randomEasing);

		const distanceEasing = pluckRandomEasing(distanceConfig.randomEasing);
		const distanceVariance = getVarianceFactor(distanceConfig.variance);

		const scaleEasing = pluckRandomEasing(scaleConfig.randomEasing);
		const scaleVariance = getVarianceFactor(scaleConfig.variance);

		return {
			delay,
			duration,
			css: (t, u) => {
				const d = t < u ? t * 2 : u * 2;

				const angleT = angleEasing(t);
				const angle = angleConfig.end * tick + angleConfig.start + angleT * angleConfig.end;

				const distanceD = distanceEasing(d);
				const distance = distanceConfig.base + distanceD * distanceVariance;

				const scaleD = scaleEasing(d);
				const scale = scaleConfig.base + scaleD * scaleVariance;

				return `
          transform:
            rotate(${angle}deg)
            translateX(${distance}px)
				    scale(${scale});
        `;
			},
		};
	};
</script>

<div class="blip" in:orbit={{ duration: interval, tick, config: config }} />

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
		opacity: 1;
		background-color: var(--color);
		box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.3);
	}

	.noop {
		transform: translateX(20px) rotate(90deg);
	}
</style>
