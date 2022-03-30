export interface TweenedOptions<T> {
	delay?: number;
	duration?: number | ((from: T, to: T) => number);
	easing?: (t: number) => number;
	interpolate?: (a: T, b: T) => (t: number) => T;
}
