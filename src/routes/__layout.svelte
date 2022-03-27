<script lang="ts">
	import PageAside from "$lib/components/page-layout/PageAside.svelte";
	import PageFooter from "$lib/components/page-layout/PageFooter.svelte";
	import PageHeader from "$lib/components/page-layout/PageHeader.svelte";
	import "../app.scss";
</script>

<div class="page">
	<PageHeader />

	<main>
		<slot />
	</main>

	<PageAside />

	<PageFooter />
</div>

<style lang="scss">
	.page {
		--height-header: 50px;
		--height-aside: 150px;
		--height-footer: 200px;
		--height-main: minmax(calc(100vh - var(--height-header) - var(--height-footer)), auto);

		display: grid;
		grid-template-columns: 1fr var(--height-aside);
		grid-template-rows: var(--height-header) var(--height-main) var(--height-footer);
		grid-template-areas:
			"header header"
			"main aside"
			"footer footer";

		main {
			grid-area: main;
			padding: 1rem;
			box-sizing: border-box;
		}
	}

	@media (max-width: 1080px) {
		.page {
			--height-main: minmax(
				calc(100vh - var(--height-header) - var(--height-aside) - var(--height-footer)),
				auto
			);

			grid-template-columns: 1fr;
			grid-template-rows: var(--height-header) var(--height-main) var(--height-aside) var(
					--height-footer
				);
			grid-template-areas:
				"header"
				"main"
				"aside"
				"footer";
		}
	}
</style>
