<script lang="ts">
	import PageAside from "$lib/components/page-layout/PageAside.svelte";
	import PageBackground from "$lib/components/page-layout/PageBackground/PageBackground.svelte";
	import PageFooter from "$lib/components/page-layout/PageFooter.svelte";
	import PageHeader from "$lib/components/page-layout/PageHeader.svelte";
	import PageMain from "$lib/components/page-layout/PageMain.svelte";
	import "../app.scss";
</script>

<div class="page">
	<PageHeader />

	<div class="background">
		<PageBackground />
	</div>

	<PageMain>
		<slot />
	</PageMain>

	<PageAside />

	<PageFooter />
</div>

<style lang="scss">
	.page {
		--height-header: 50px;
		--height-aside: 220px;
		--height-footer: 200px;
		--height-main: minmax(calc(100vh - var(--height-header) - var(--height-footer)), auto);

		display: grid;
		grid-template-columns: 1fr var(--height-aside);
		grid-template-rows: var(--height-header) var(--height-main) var(--height-footer);
		grid-template-areas:
			"header header"
			"main aside"
			"footer footer";

		.background {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
		}
	}

	@media screen and (max-width: 1080px) {
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

			.background {
				grid-column: 1 / 2;
				grid-row: 2 / 4;
			}
		}
	}
</style>
