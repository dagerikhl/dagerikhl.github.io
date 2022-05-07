<script lang="ts">
	import Card from "$lib/components/design/cards/Card.svelte";
	import Link from "$lib/components/design/links/Link.svelte";
	import EventPerformancePreview from "$lib/components/event-performances/EventPerformancePreview.svelte";
	import Markdown from "$lib/components/markdown/Markdown.svelte";
	import PersonPreview from "$lib/components/persons/PersonPreview.svelte";
	import type { IPublication } from "$lib/models/IPublication";

	export let publication: IPublication;
</script>

<Card>
	<div class="publication">
		<h2>{publication.name}</h2>

		{#if publication.type || publication.date}
			<h3 class="subheading">
				{publication.type ?? ""}
				{#if publication.date}{publication.date.getFullYear()}{/if}
			</h3>
		{/if}

		{#if publication.links}
			<div class="links">
				{#each publication.links as link}
					<Link {link} target="_blank" />
				{/each}
			</div>
		{/if}

		<p class="abstract">
			<Markdown source={publication.abstract} />
		</p>

		{#if publication.performances}
			<div class="performances">
				<h3>Event Performances</h3>

				{#each publication.performances as performance (performance.name)}
					<EventPerformancePreview {performance} />
				{/each}
			</div>
		{/if}

		<div class="authors">
			<h3>Authors</h3>

			{#each publication.authors as author (author.name)}
				<PersonPreview person={author} />
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	.publication {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			"heading authors"
			"subheading authors"
			"links authors"
			"abstract authors"
			"performances authors";
		gap: 1rem;

		h2 {
			grid-area: heading;
			margin-bottom: 0;
		}

		.subheading {
			grid-area: subheading;
		}

		.links {
			grid-area: links;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
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
			flex-wrap: wrap;
			align-items: center;
			gap: 2rem;
		}

		h3 {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: 1080px) {
		.publication {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, auto);
			grid-template-areas:
				"heading"
				"subheading"
				"links"
				"authors"
				"abstract"
				"performances";

			.authors {
				justify-self: end;
				flex-direction: row;
				justify-content: flex-end;
			}
		}
	}
</style>
