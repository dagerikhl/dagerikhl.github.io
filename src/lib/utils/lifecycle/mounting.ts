import { onMount } from "svelte";
import { type Writable, writable } from "svelte/store";

export const getIsMountedStore = (): Writable<boolean> => {
	const isMounted = writable(false);

	onMount(() => {
		isMounted.set(true);
	});

	return isMounted;
};
