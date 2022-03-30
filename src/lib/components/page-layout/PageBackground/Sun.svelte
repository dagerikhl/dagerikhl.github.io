<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import {
		createConfigParameter,
		createConfigParameterOptions,
		createParameterStore,
	} from "$lib/components/page-layout/PageBackground/utils";
	import type { TweenedConfig } from "$lib/types/TweenedConfig";
	import { rollResult } from "$lib/utils/chance";

	export let interval: number;

	interface Config {
		scale: TweenedConfig<number>;
	}

	const CONFIG: Config = {
		scale: createConfigParameter(0, interval),
	};

	const scaleStore = createParameterStore(CONFIG.scale);
	$: style = `\
transform: scale(${$scaleStore});\
`;

	let motionInterval: NodeJS.Timer;

	onMount(() => {
		motionInterval = setInterval(() => {
			const options = rollResult([
				{ chance: 0.6, result: createConfigParameterOptions<number>(interval) },
			]);

			const newScale = rollResult(
				[
					{ chance: 0.9, result: 0.3 + Math.random() * 2.2 },
					{ chance: 0.1, result: 0 },
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

<div class="sun" {style} />

<style lang="scss">
	.sun {
		--size: 120px;
		--color: #ffe8be;

		position: absolute;
		top: calc(50% - var(--size) / 2);
		left: calc(50% - var(--size) / 2);
		height: var(--size);
		width: var(--size);
		border-radius: 100%;
		opacity: 0.5;
		background-color: var(--color);
		box-shadow: 0 0 80px 40px var(--color);
	}
</style>
