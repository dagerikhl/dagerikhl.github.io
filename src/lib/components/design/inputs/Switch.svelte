<script lang="ts">
	// Note: A controlled input component

	import { createEventDispatcher } from "svelte";
	import type { SwitchChangeEventProps } from "./SwitchProps";

	const dispatch = createEventDispatcher<{ change: SwitchChangeEventProps }>();

	export let id: string;
	export let checked: boolean;

	const handleChange = ({ target }: Event) => {
		dispatch("change", { checked: (target as HTMLInputElement).checked });
	};
</script>

<div class="switch">
	<input {id} type="checkbox" bind:checked on:change={handleChange} />
	<span class="slider" />
</div>

<style lang="scss">
	.switch {
		--height: 24px;
		--inner-height: calc(var(--height) - (var(--padding) * 2));
		--width: 40px;
		--inner-width: calc(var(--width) - (var(--padding) * 2) - var(--inner-height));
		--padding: 4px;

		position: relative;
		display: inline-block;
		height: var(--height);
		width: var(--width);
	}

	.switch input {
		height: 0;
		width: 0;
		opacity: 0;
	}

	.slider {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: var(--background-color-tertiary);
		border-radius: var(--height);
		cursor: pointer;
		transition: transform 400ms;
	}
	.slider::before {
		content: "";
		position: absolute;
		bottom: var(--padding);
		left: var(--padding);
		height: var(--inner-height);
		width: var(--inner-height);
		background-color: var(--color-white);
		border-radius: 50%;
		transition: transform 400ms;
	}

	input:checked + .slider {
		background-color: var(--color-accent);
	}
	input:checked + .slider::before {
		transform: translateX(var(--inner-width));
	}
	input:focus + .slider {
		outline: 2px solid var(--color-border-primary);
	}
</style>
