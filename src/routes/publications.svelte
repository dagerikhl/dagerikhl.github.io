<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { slide } from "svelte/transition";
	import Publication from "$lib/components/publications/Publication.svelte";
	import { PERSON_DAG_ERIK } from "$lib/constants/persons";
	import type { IPublication } from "$lib/models/IPublication";

	// TODO Should this be managed by a CMS?
	const PUBLICATIONS: IPublication[] = [
		{
			name: '"STIX & Stones" - A Data-Driven Security Game to Facilitate Information Security Education',
			authors: [PERSON_DAG_ERIK, { name: "Jingyue Li" }, { name: "Tosin Daniel Oyetoyan" }],
			links: [
				"https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2644564",
				"https://github.com/dagerikhl/ddsg-docs",
				"https://github.com/dagerikhl/ddsg",
				"https://github.com/dagerikhl/ddsg-server",
			],
			type: "Master Thesis",
			date: new Date(2019, 7 - 1, 3),
			abstract: `\
Many universities have started to educate students on how to develop secure software and systems. One challenge of teaching information security is that the curriculum can easily be outdated, because new attacks and mitigation approaches arise.

It is therefore necessary to provide software developers with methods and tools that are attractive (e.g., computer games) for self-study and up-to-date information security knowledge during and after the university education.

This paper presents an on-going study to develop an educational game to facilitate information security education.

The game is developed as a single player Tower Defense (TD) game. The educational goal of the game is to teach developers, who are not security experts, how to choose proper mitigation strategies and patterns to defend against various security attack scenarios. One key benefit of our game is that it is data driven, meaning, it can continuously fetch data from relevant security-based online sources (e.g., Common Attack Pattern Enumeration Classification CAPEC) to stay up to date with any new information. This is done automatically.

We evaluated the game by letting students play it and give comments. Evaluation results show that the game can facilitate students learning of mitigation strategies to defend against attack scenarios.
`,
		},
	];
</script>

<svelte:head>
	<title>dagerikhl - Publications</title>
</svelte:head>

<section>
	<h1>Publications</h1>

	<div class="publications" in:slide>
		{#each PUBLICATIONS as publication (publication.name)}
			<Publication {publication} />
		{/each}
	</div>
</section>

<style lang="scss">
	.publications {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
