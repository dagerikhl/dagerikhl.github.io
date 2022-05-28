<script>
	import { faCopyright } from "@fortawesome/free-regular-svg-icons";
	import Icon from "$lib/components/design/icons/Icon.svelte";
	import Link from "$lib/components/design/links/Link.svelte";
</script>

<footer>
	<div class="copyright"><Icon icon={faCopyright} size="sm" /> Dag Erik Løvgren 2022 –</div>

	<div class="links">
		<Link
			link={{ url: "https://github.com/dagerikhl", label: "dagerikhl @ GitHub" }}
			target="_blank"
		/>
		<Link
			link={{ url: "https://www.linkedin.com/in/dagerikhl", label: "Dag Erik Løvgren @ LinkedIn" }}
			target="_blank"
		/>
		<Link
			link={{
				url: "https://www.miles.no/ansatte/dag-erik-lovgren",
				label: "Dag Erik Løvgren @ Miles",
			}}
			target="_blank"
		/>
	</div>
</footer>

<style lang="scss">
	footer {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		height: 100%;
		padding: 1rem;
		background-color: var(--background-color-tertiary);
		color: var(--text-color-tertiary);
	}

	.copyright {
		grid-column: 1 / 2;
	}

	.links {
		grid-column: 3 / 4;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;

		:global(a) {
			color: var(--text-color-tertiary);
		}
	}
</style>
