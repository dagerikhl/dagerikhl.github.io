export const degToRad = (deg) => deg * (Math.PI / 180);

export const pluck = <T>(choices: T[]): T => choices[Math.floor(Math.random() * choices.length)];
