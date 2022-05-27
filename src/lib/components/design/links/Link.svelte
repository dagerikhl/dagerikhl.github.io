<script lang="ts">
	import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
	import Icon from "$lib/components/design/icons/Icon.svelte";
	import type { Link } from "$lib/types/Link";
	import { getLinkLabel, getLinkUrl } from "$lib/utils/formatting/links";

	export let link: Link;
	export let target: "_blank" | "_self" | "_parent" | "_top" | "framename";
	export let title: string = undefined;

	$: isExternal = target === "_blank";
	$: displayTitle = title ?? (target === "_blank" ? "Opens in a new tab" : undefined);
</script>

<a href={getLinkUrl(link)} {target} title={displayTitle}
	><slot>{getLinkLabel(link)}</slot>{#if isExternal}&nbsp;<Icon
			icon={faExternalLink}
			size="sm"
		/>{/if}</a
>
