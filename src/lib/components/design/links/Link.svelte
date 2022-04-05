<script lang="ts">
	import type { Link } from "$lib/types/Link";
	import { getLinkLabel, getLinkUrl } from "$lib/utils/formatting/links";

	export let link: Link;
	export let target: "_blank" | "_self" | "_parent" | "_top" | "framename";
	export let title = target === "_blank" ? "Opens in a new tab" : undefined;
</script>

<a href={getLinkUrl(link)} {target} {title}
	><slot>{getLinkLabel(link)}</slot>{#if target === "_blank"}&nbsp;↗{/if}</a
>
