<script lang="ts">
	import { page } from "$app/stores";
	import dagerikhl from "$lib/assets/images/dagerikhl.png";
</script>

<header>
	<img class="avatar" src={dagerikhl} alt="dagerikhl avatar" />

	<nav>
		<ul>
			<li class:active={$page.url.pathname === "/"}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>

			<li class:active={$page.url.pathname === "/about"}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
	</nav>

	<div />
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
		box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);

		.avatar {
			grid-area: avatar;
			height: 48px;
			width: 48px;
		}

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

				li {
					position: relative;
					height: 100%;

					&.active::before {
						--size: 6px;

						content: "";
						position: absolute;
						top: 0;
						left: calc(50% - var(--size));
						height: 0;
						width: 0;
						border: var(--size) solid transparent;
						border-top: var(--size) solid var(--text-color-accent);
					}
				}
			}

			a {
				display: flex;
				align-items: center;
				height: 100%;
				padding: 0 1em;
				color: var(--text-color-heading);
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.1em;
				text-decoration: none;
				transition: color 200ms linear;

				&:hover {
					color: var(--text-color-accent);
				}
			}
		}
	}
</style>
