<script lang="ts">
	import Link from "$lib/components/design/links/Link.svelte";

	export let href = "";
	export let title: string;
</script>

<Link link={href} {title} target="_blank"><slot /></Link>
