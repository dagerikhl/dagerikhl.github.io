<script lang="ts">
	import { page } from "$app/stores";

	export let prefetch = true;
	export let path: string;
	export let label: string;
</script>

<li class:active={$page.url.pathname === path}>
	<a sveltekit:prefetch={prefetch ? true : undefined} href={path}>{label ?? path}</a>
</li>

<style lang="scss">
	li {
		position: relative;
		height: 100%;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: calc(50% - var(--size));
			height: 0;
			width: 0;
			border: var(--size) solid transparent;
			border-top: var(--size) solid var(--text-color-accent);
			transition: border-top-width 180ms ease-in-out;
		}

		&.active {
			--size: 8px;
		}

		&:not(.active):hover {
			--size: 6px;

			a {
				color: var(--text-color-accent);
			}
		}

		a {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 0 1em;
			color: var(--text-color-heading);
			font-weight: 600;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 200ms linear;
		}
	}
</style>
