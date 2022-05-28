<script lang="ts">
	import dayjs from "dayjs";
	import Card from "$lib/components/design/cards/Card.svelte";
	import Link from "$lib/components/design/links/Link.svelte";
	import Markdown from "$lib/components/markdown/Markdown.svelte";
	import PersonPreview from "$lib/components/persons/PersonPreview.svelte";
	import type { IPublication } from "$lib/models/IPublication";

	export let publication: IPublication;
</script>

<Card>
	<div class="publication">
		<h2 class="heading">{publication.name}</h2>

		{#if publication.type || publication.date}
			<h3 class="subheading">
				{publication.type ?? ""}
				{#if publication.date}{dayjs(publication.date).year()}{/if}
			</h3>
		{/if}

		{#if publication.links}
			<div class="links">
				{#each publication.links as link}
					<Link {link} target="_blank" />
				{/each}
			</div>
		{/if}

		<div class="abstract">
			<Markdown source={publication.abstract} />
		</div>

		<div class="authors">
			<h3>Authors</h3>

			{#each publication.authors as author (author.name)}
				<PersonPreview person={author} />
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	@import "../src/lib/style/variables";

	.publication {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			"heading authors"
			"subheading authors"
			"links authors"
			"abstract authors";
		gap: 1rem;

		h2,
		h3 {
			margin-bottom: 0;
		}

		.heading {
			grid-area: heading;
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

		.authors {
			grid-area: authors;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			align-items: center;
			gap: 2rem;
		}
	}

	@media screen and (max-width: $screenBig) {
		.publication {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, auto);
			grid-template-areas:
				"heading"
				"subheading"
				"authors"
				"links"
				"abstract";

			.authors {
				justify-self: end;
				flex-direction: row;
				justify-content: flex-end;
			}
		}
	}
</style>
