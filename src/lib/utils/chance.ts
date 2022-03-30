export const pluck = <T>(choices: T[]): T => choices[Math.floor(Math.random() * choices.length)];

export interface RollOption<T> {
	chance: number;
	result: T;
}

export const rollResult = <T>(options: RollOption<T>[], fallback?: T): T => {
	const totalChance = options.reduce((res, { chance }) => res + chance, 0);

	if (totalChance > 1) {
		throw new Error(`Total chance cannot exceed 1, total chance was ${totalChance}.`);
	}
	if (totalChance < 1) {
		options = [...options, { chance: 1 - totalChance, result: fallback }];
	}

	let i: number;

	const chances: number[] = [];

	for (i = 0; i < options.length; i++) {
		chances[i] = options[i].chance + (chances[i - 1] ?? 0);
	}

	const outcome = Math.random() * chances[chances.length - 1];

	for (i = 0; i < chances.length; i++) {
		if (chances[i] > outcome) {
			break;
		}
	}

	if (!options[i]) {
		return fallback;
	}

	return options[i].result;
};
