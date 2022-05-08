export interface CelestialConfig {
	angle: {
		start: number;
		end: number;
		randomEasing?: boolean;
	};
	distance: {
		base: number;
		variance?: number;
		randomEasing?: boolean;
	};
	scale: {
		base: number;
		variance?: number;
		randomEasing?: boolean;
	};
}
