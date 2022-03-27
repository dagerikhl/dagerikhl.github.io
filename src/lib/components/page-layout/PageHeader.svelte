<script lang="ts">
	import dagerikhl from "$lib/assets/images/dagerikhl.png";
	import PageHeaderNav from "$lib/components/page-layout/PageHeaderNav.svelte";
</script>

<header>
	<img class="avatar" src={dagerikhl} alt="dagerikhl avatar" />

	<PageHeaderNav />
</header>

<style lang="scss">
	header {
		grid-area: header;
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: "avatar nav";
		background-color: var(--background-color-secondary);
		box-shadow: var(--shadow-card);

		.avatar {
			grid-area: avatar;
			height: 48px;
			width: 48px;
		}
	}
</style>
