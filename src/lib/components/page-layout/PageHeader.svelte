<script lang="ts">
	import dagerikhl from "$lib/assets/images/dagerikhl.png";
	import PageHeaderNav from "$lib/components/page-layout/PageHeaderNav.svelte";
	import PageHeaderThemeSwitcher from "$lib/components/page-layout/PageHeaderThemeSwitcher.svelte";
</script>

<header>
	<div class="avatar">
		<img src={dagerikhl} alt="dagerikhl avatar" />
	</div>

	<PageHeaderNav />

	<PageHeaderThemeSwitcher />
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-areas: "avatar nav theme";
		padding: 0 calc(var(--border-content-width) + 0.5rem);
		background-color: var(--background-color-secondary);
		box-shadow: var(--shadow-card);

		.avatar {
			grid-area: avatar;
			height: 48px;
			width: 48px;
			padding: 0.25rem 0;
			box-sizing: border-box;

			img {
				height: 100%;
				object-fit: contain;
				filter: grayscale(1) brightness(1.2) contrast(2);
			}
		}
	}
</style>
