<script lang="ts">
	import type { EventPerformance } from "$lib/types/EventPerformance";
	import { formatDateOrDatetime } from "$lib/utils/formatting/dates";

	export let performance: EventPerformance;
</script>

{#if performance}
	<div class="performance">
		<h4>
			{performance.name}{#if performance.event}&nbsp;@&nbsp;{performance.event}{/if}
		</h4>

		{#if performance.location}
			<div>Where: {performance.location}</div>
		{/if}

		{#if performance.time}
			<div>
				When: {formatDateOrDatetime(performance.time.from)}{#if performance.time.to}
					&nbsp;–&nbsp;{formatDateOrDatetime(performance.time.to)}
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.performance {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-left: 1px solid #000000;
		padding-left: 0.5rem;

		h4 {
			margin-bottom: 0;
		}
	}
</style>
