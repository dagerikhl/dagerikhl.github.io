<main>
	<slot />
</main>

<style lang="scss">
	main {
		// Expanded from `padding:` because it didn't work; didn't respect bottom padding
		padding-top: var(--main-padding);
		padding-right: var(--main-side-padding);
		padding-left: var(--main-side-padding);
		padding-bottom: var(--main-padding);
	}
</style>
