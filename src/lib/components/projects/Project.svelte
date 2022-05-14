<script lang="ts">
	import Card from "$lib/components/design/cards/Card.svelte";
	import Link from "$lib/components/design/links/Link.svelte";
	import Markdown from "$lib/components/markdown/Markdown.svelte";
	import PersonPreview from "$lib/components/persons/PersonPreview.svelte";
	import type { IProject } from "$lib/models/IProject";

	export let project: IProject;
</script>

<Card>
	<div class="project">
		<h2 class="heading">{project.name}</h2>

		{#if project.homepage}
			<h2 class="homepage">
				<Link link={project.homepage} target="_blank" />
			</h2>
		{/if}

		{#if project.type}
			<h3 class="subheading">
				{project.type}
			</h3>
		{/if}

		{#if project.links}
			<div class="links">
				{#each project.links as link}
					<Link {link} target="_blank" />
				{/each}
			</div>
		{/if}

		<div class="abstract">
			<Markdown source={project.abstract} />
		</div>

		<div class="authors">
			<h3>Authors</h3>

			{#each project.authors as author (author.name)}
				<PersonPreview person={author} />
			{/each}
		</div>
	</div>
</Card>

<style lang="scss">
	.project {
		display: grid;
		grid-template-columns: 1fr auto auto;
		grid-template-rows: repeat(4, auto);
		grid-template-areas:
			"heading homepage homepage"
			"subheading subheading authors"
			"links links authors"
			"abstract abstract authors";
		gap: 1rem;

		h2,
		h3 {
			margin-bottom: 0;
		}

		.heading {
			grid-area: heading;
		}

		.homepage {
			grid-area: homepage;
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

	@media screen and (max-width: 1080px) {
		.project {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(6, auto);
			grid-template-areas:
				"heading"
				"homepage"
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
