<script lang="ts">
	import PageHeaderNavItem from "$lib/components/page-layout/PageHeaderNavItem.svelte";
</script>

<nav>
	<ul>
		<PageHeaderNavItem path="/" label="Home" />
		<PageHeaderNavItem path="/about" label="About" />
	</ul>
</nav>

<style lang="scss">
	nav {
		grid-area: nav;
		grid-column: 1 / 3;

		ul {
			position: relative;
			display: flex;
			justify-content: center;
			height: 100%;
			margin: 0;
			padding: 0;
			list-style: none;
		}
	}
</style>
