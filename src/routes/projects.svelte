<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { slide } from "svelte/transition";
	import Project from "$lib/components/projects/Project.svelte";
	import { PERSON_DAG_ERIK } from "$lib/constants/persons";
	import type { IProject } from "$lib/models/IProject";

	// TODO Should this be managed by a CMS?
	const PROJECTS: IProject[] = [
		{
			name: "Primors",
			authors: [PERSON_DAG_ERIK],
			homepage: "https://dagerikhl.github.io/primors",
			links: [
				{ label: "Primors @ npm", url: "https://www.npmjs.com/package/primors" },
				{ label: "Primors @ GitHub", url: "https://github.com/dagerikhl/primors" },
			],
			type: "React Functionality (Components, Hooks, Utils, etc.) Library",
			abstract: `\
Package library for common React functionalities, such as Components, Hooks, and Utilities.

The library consists of a collection of functionalities I commonly find myself using in React
projects, and is extracted to this project as a common well of re-usable functionality.

All the functionality in the library aims to be as general-purpose as possible, making them
applicable and customizable in any project.

The components does not consern itself with things like style, as that is most often controlled by
the project the library is being used in.
`,
		},
		{
			name: "Day11 Wishlist",
			authors: [PERSON_DAG_ERIK],
			homepage: "https://github.com/dagerikhl/day11-wishlist",
			type: "Custom Wedding Wishlist",
			abstract: `\
Wedding wishlist for guests to mark things they have bought for the couple.

Aims to emulate simliar lists provided by certain web shops, while remaining completely general.

Not everything the couple wishes for can be found at a specific store, or may not be sold in a store
at all. This project aims to give the owners a way to publish their wishlist without being limited
to a specific store.

The resulting website from this project allows the owners to add wishes to their wishlist, and
allows the users/guests to check gifts that has been aquired for the couple. This allows the couple
to maintain an overview of gifts that has been aquired, but most importantly helps other guests not
aquire the same gifts that already has been aquired.

[Origin of name](https://open.spotify.com/track/2D8j0BRWCUSECL1Z53s7l2?si=7a7acf5a73ea40dd)
`,
		},
	];
</script>

<svelte:head>
	<title>dagerikhl - Projects</title>
</svelte:head>

<section>
	<h1>Projects</h1>

	<div class="projects" in:slide>
		{#each PROJECTS as project (project.name)}
			<Project {project} />
		{/each}
	</div>
</section>

<style lang="scss">
	.projects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
