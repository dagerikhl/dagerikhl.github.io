<script lang="ts">
	import Card from "$lib/components/design/cards/Card.svelte";
	import Link from "$lib/components/design/links/Link.svelte";
	import EventPerformancePreview from "$lib/components/event-performances/EventPerformancePreview.svelte";
	import Markdown from "$lib/components/markdown/Markdown.svelte";
	import PersonPreview from "$lib/components/persons/PersonPreview.svelte";
	import type { IWorkshop } from "$lib/models/IWorkshop";

	export let workshop: IWorkshop;
</script>

<Card>
	<div class="workshop">
		<h2 class="heading">{workshop.name}</h2>

		{#if workshop.links}
			<div class="links">
				{#each workshop.links as link}
					<Link {link} target="_blank" />
				{/each}
			</div>
		{/if}

		<div class="abstract">
			<Markdown source={workshop.abstract} />
		</div>

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
</Card>

<style lang="scss">
	@import "../../style/variables/screen";

	.workshop {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			"heading authors"
			"links authors"
			"abstract authors"
			"performances authors";
		gap: 1rem;

		h2 {
			margin-bottom: 0;
		}

		.heading {
			grid-area: heading;
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

	@media screen and (max-width: $screenBig) {
		.workshop {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, auto);
			grid-template-areas:
				"heading"
				"authors"
				"links"
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
