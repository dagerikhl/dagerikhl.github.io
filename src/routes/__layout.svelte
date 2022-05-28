<script lang="ts">
	import SvelteTheme from "svelte-themes/SvelteTheme.svelte";
	import PageAside from "$lib/components/page-layout/PageAside.svelte";
	import PageBackground from "$lib/components/page-layout/PageBackground/PageBackground.svelte";
	import PageBorders from "$lib/components/page-layout/PageBorders/PageBorders.svelte";
	import PageFooter from "$lib/components/page-layout/PageFooter.svelte";
	import PageHeader from "$lib/components/page-layout/PageHeader.svelte";
	import PageMain from "$lib/components/page-layout/PageMain.svelte";
	import "../app.scss";
</script>

<SvelteTheme />

<div class="page">
	<div class="header">
		<PageHeader />
	</div>

	<div class="background">
		<PageBackground />
	</div>

	<div class="borders">
		<PageBorders />
	</div>

	<div class="main">
		<PageMain><slot /></PageMain>
	</div>

	<div class="aside">
		<PageAside />
	</div>

	<div class="footer">
		<PageFooter />
	</div>
</div>

<style lang="scss">
	.page {
		--height-header: 50px;
		--height-aside: 220px;
		--height-footer: 200px;
		--height-main: minmax(calc(100vh - var(--height-header) - var(--height-footer)), auto);

		position: relative;
		display: grid;
		grid-template-columns: 1fr var(--height-aside);
		grid-template-rows: var(--height-header) var(--height-main) var(--height-footer);
		grid-template-areas:
			"header header"
			"main aside"
			"footer footer";

		.header {
			grid-area: header;
			z-index: 20;
		}
		.background {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
			z-index: 10;
		}
		.borders {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
			z-index: 30;
		}
		.main {
			grid-area: main;
			z-index: 40;
		}
		.aside {
			grid-area: aside;
			z-index: 40;
		}
		.footer {
			grid-area: footer;
			z-index: 50;
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
			.borders {
				grid-column: 1 / 2;
				grid-row: 2 / 4;
			}
		}
	}
</style>
