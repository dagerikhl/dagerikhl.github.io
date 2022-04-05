<script lang="ts">
	import { slide } from "svelte/transition";
	import Link from "$lib/components/design/links/Link.svelte";
	import EventPerformancePreview from "$lib/components/event-performances/EventPerformancePreview.svelte";
	import Markdown from "$lib/components/markdown/Markdown.svelte";
	import PersonPreview from "$lib/components/persons/PersonPreview.svelte";
	import type { IWorkshop } from "$lib/models/IWorkshop";

	export let workshop: IWorkshop;
</script>

<div class="workshop" in:slide>
	<h2>{workshop.name}</h2>

	{#if workshop.links}
		{#each workshop.links as link}
			<Link {link} target="_blank" />
		{/each}
	{/if}

	<p class="abstract">
		<Markdown source={workshop.abstract} />
	</p>

	{#if workshop.performances}
		<div class="performances">
			<h3>Event Performances</h3>

			{#each workshop.performances as performance (performance.name)}
				<EventPerformancePreview {performance} />
			{/each}
		</div>
	{/if}

	<div class="authors">
		<h3>Authors</h3>

		{#each workshop.authors as author (author.name)}
			<PersonPreview person={author} />
		{/each}
	</div>
</div>

<style lang="scss">
	.workshop {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			"heading authors"
			"link authors"
			"abstract authors"
			"performances authors";
		background-color: var(--background-color-secondary);
		box-shadow: var(--shadow-card);
		border-radius: 4px;
		padding: 1rem;
		gap: 1rem;

		h2 {
			grid-area: heading;
			margin-bottom: 0;
		}

		a {
			grid-area: link;
		}

		.abstract {
			grid-area: abstract;
		}

		.performances {
			grid-area: performances;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.authors {
			grid-area: authors;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		h3 {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: 1080px) {
		.workshop {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, auto);
			grid-template-areas:
				"heading"
				"link"
				"authors"
				"abstract"
				"performances";

			.authors {
				justify-self: end;
				flex-direction: row;
			}
		}
	}
</style>
