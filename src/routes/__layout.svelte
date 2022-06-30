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
	@import "../lib/style/variables/screen";

	.page {
		position: relative;
		display: grid;
		grid-template-columns: 1fr var(--aside-size);
		grid-template-rows: var(--header-height) var(--main-height) var(--footer-height);
		grid-template-areas:
			"header header"
			"main aside"
			"footer footer";
		min-height: 100vh;

		.header {
			grid-area: header;

			z-index: 20;
		}
		.background {
			grid-column: 1 / 3;
			grid-row: 2 / 3;

			z-index: 10;

			position: relative;
			height: 100%;
			width: 100%;
		}
		.borders {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
			z-index: 30;
		}
		.main {
			--main-padding: 1rem;
			--main-side-padding: calc(var(--border-content-width) - 2rem);

			grid-area: main;

			z-index: 40;

			padding: var(--main-padding) var(--main-side-padding) var(--main-padding)
				var(--main-side-padding);
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

	@media screen and (max-width: $screenBig) {
		.page {
			grid-template-columns: 1fr;
			grid-template-rows: var(--header-height) var(--main-height) var(--aside-size) var(
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
