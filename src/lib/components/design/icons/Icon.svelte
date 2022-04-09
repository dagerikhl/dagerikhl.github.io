<script lang="ts">
	// May Exchange FA and/or svelte-fa for another icon library in future, therefore this component
	// Props and prop types taken directly from FA from svelte-fa

	import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let className: string = undefined;
	export let id: string = undefined;
	export let style: string = undefined;

	export let icon: IconDefinition = undefined;

	export let size:
		| "xs"
		| "sm"
		| "lg"
		| "1x"
		| "2x"
		| "3x"
		| "4x"
		| "5x"
		| "6x"
		| "7x"
		| "8x"
		| "9x"
		| "10x" = undefined;
	export let color: string = undefined;

	export let fw: boolean = undefined;
	export let pull: "left" | "right" = undefined;

	export let scale: number | string = undefined;
	export let translateX: number | string = undefined;
	export let translateY: number | string = undefined;
	export let rotate: number | string = undefined;
	export let flip: "horizontal" | "vertical" | "both" = undefined;

	export let spin: boolean = undefined;
	export let pulse: boolean = undefined;

	export let primaryColor: string = undefined;
	export let secondaryColor: string = undefined;
	export let primaryOpacity: number | string = undefined;
	export let secondaryOpacity: number | string = undefined;
	export let swapOpacity: boolean = undefined;
</script>

<Fa
	class={className}
	{id}
	{style}
	{icon}
	{size}
	{color}
	{fw}
	{pull}
	{scale}
	{translateX}
	{translateY}
	{rotate}
	{flip}
	{spin}
	{pulse}
	{primaryColor}
	{secondaryColor}
	{primaryOpacity}
	{secondaryOpacity}
	{swapOpacity}
/>

<style lang="scss"></style>
