<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { slide } from "svelte/transition";
	import Workshop from "$lib/components/workshops/Workshop.svelte";
	import { PERSON_DAG_ERIK } from "$lib/constants/persons";
	import type { IWorkshop } from "$lib/models/IWorkshop";

	// TODO Should this be managed by a CMS?
	const WORKSHOPS: IWorkshop[] = [
		{
			name: "Gather your Party with Svelte",
			authors: [
				PERSON_DAG_ERIK,
				{
					name: "Alexander Castillo",
					homepage: "https://github.com/palexcast",
					image: "https://avatars.githubusercontent.com/u/15246162?v=4",
				},
			],
			links: ["https://github.com/miles-no/booster2022-gather-your-party-with-svelte"],
			abstract: `\
In this workshop we will take you through the basic concepts of Svelte. We’ll do this by making our
own Character Creator! If you’re not familiar with the concept, a character creator is a tool for
making a fictional character using a variety of features. Examples of features: Inputting name,
rolling stats, selecting abilities, uploading portrait, selecting appearance, writing bio, etc.
Here’s a [simple example](https://basicfantasy.andrewcooperonline.com/), and here’s a more
[advanced example](https://www.dungeonmastersvault.com/pages/dnd/5e/character-builder).

The workshop will start off with an introduction to Svelte and the app we will be building. The
workshop will then proceed with building the app through several step. And here’s where the learning
comes in: each step is designed to showcase a certain feature of Svelte. And don’t worry if you fall
behind on a step, we’ll have code ready for you to skip to the next step.

We’ll finish the workshop by taking a look at our work and comparing Svelte and its features against
other popular web technologies, such as React.

Throughout the workshop Alexander and Dag Erik will be available for questions, help, or just a
chat.

We hope you find this interesting, and can’t wait to see you!

\\\\- Alexander Castillo and Dag Erik Løvgren.

- Primarily for: Developers.
- Participant requirements: A computer with Git, Node 16+, and Npm/Yarn installed. Some experience
  with web development and TypeScript/JavaScript is recommended. Experience with Svelte is not
  required.
`,
			performances: [
				{
					name: "Gather your Party with Svelte",
					event: "BoosterConf 2022",
					location: "Radisson Blu Royal Hotel Bryggen, Bergen, Norway",
					time: {
						from: new Date(2022, 3 - 1, 24, 9, 0).valueOf(),
						to: new Date(2022, 3 - 1, 24, 12, 15).valueOf(),
					},
				},
			],
		},
		{
			name: "Gather your Party and Learn a New Technology",
			authors: [PERSON_DAG_ERIK],
			links: [
				"https://github.com/dagerikhl/miles-fagdag01-gypalant-case-svelte",
				"https://github.com/dagerikhl/miles-fagdag01-gypalant-case-go",
			],
			abstract: `\
Using a full day to explore and learn a new technology, either through free exploration, or through
a predefined starter with a case attached.

The workshop is split into two technologies: Svelte and Go(lang).

For Svelte, the case is to create a character creator, and incidentally was the inspiration for the
"Gather your Party with Svelte" workshop above.

For Go, two starter cases are given: a completely blank slate for making anything you want, and an
API-starter for making some kind of API with Go.

The cases are described in more detail in the Git repositories.

_Note: The workshop descriptions in the Git repositories are in Norwegian._
`,
			performances: [
				{
					name: "Gather your Party and Learn a New Technology",
					event: "Miles Subject Day #1",
					location: "Miles Bergen, Norway",
					time: {
						from: new Date(2021, 10 - 1, 8, 8, 0).valueOf(),
						to: new Date(2021, 10 - 1, 8, 16, 0).valueOf(),
					},
				},
			],
		},
	];
</script>

<svelte:head>
	<title>dagerikhl - Workshops</title>
</svelte:head>

<section>
	<h1>Workshops</h1>

	<div class="workshops" in:slide>
		{#each WORKSHOPS as workshop (workshop.name)}
			<Workshop {workshop} />
		{/each}
	</div>
</section>

<style lang="scss">
	.workshops {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
