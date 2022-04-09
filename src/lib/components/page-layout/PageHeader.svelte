<script lang="ts">
	import dagerikhl from "$lib/assets/images/dagerikhl.png";
	import PageHeaderNav from "$lib/components/page-layout/PageHeaderNav.svelte";
	import PageHeaderThemeSwitcher from "$lib/components/page-layout/PageHeaderThemeSwitcher.svelte";
</script>

<header>
	<img class="avatar" src={dagerikhl} alt="dagerikhl avatar" />

	<PageHeaderNav />

	<PageHeaderThemeSwitcher />
</header>

<style lang="scss">
	header {
		grid-area: header;
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-areas: "avatar nav theme";
		background-color: var(--background-color-secondary);
		box-shadow: var(--shadow-card);
		z-index: 1000;

		.avatar {
			grid-area: avatar;
			height: 48px;
			width: 48px;
			padding: 0.25rem;
			box-sizing: border-box;
		}
	}
</style>
