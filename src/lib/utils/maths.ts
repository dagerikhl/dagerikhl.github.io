export const degToRad = (deg: number): number => deg * (Math.PI / 180);

export const getVarianceFactor = (variance?: number): number =>
	typeof variance === "number" ? Math.random() * variance - variance / 2 : 0;
