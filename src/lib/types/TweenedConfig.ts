import type { TweenedOptions } from "./TweenedOptions";

export interface TweenedConfig<T> {
	initialValue: T;
	config: TweenedOptions<T>;
}
