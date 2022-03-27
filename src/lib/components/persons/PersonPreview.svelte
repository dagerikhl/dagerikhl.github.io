<script lang="ts">
	import type { Person } from "$lib/types/Person";

	export let person: Person;
	export let size = { height: 196, width: 196 };
</script>

{#if person}
	{#if person.homepage}
		<a class="person" href={person.homepage} target="_blank">
			{#if person.image}
				<img
					src={person.image}
					height={size.height}
					width={size.width}
					alt="{person.name} portrait"
				/>
			{/if}

			<div class="name">{person.name}</div>
		</a>
	{:else}
		<div class="person">
			{#if person.image}
				<img
					src={person.image}
					height={size.height}
					width={size.width}
					alt="{person.name} portrait"
				/>
			{/if}

			<div class="name">{person.name}</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	.person {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			clip-path: circle();
		}

		.name {
			font-size: 120%;
			font-weight: 600;
		}
	}
</style>
