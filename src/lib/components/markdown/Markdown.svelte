<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import MdLinkRenderer from "$lib/components/markdown/MdLinkRenderer.svelte";

	export let source: string = undefined;
	export let renderers: object = undefined;
	export let options: object = undefined;
	export let isInline: boolean = undefined;

	$: renderersWithDefault = {
		...(renderers ?? {}),
		link: MdLinkRenderer,
	};
</script>

<SvelteMarkdown {source} renderers={renderersWithDefault} {options} {isInline} on:parsed />
