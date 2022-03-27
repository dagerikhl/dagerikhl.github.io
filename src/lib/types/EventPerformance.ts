export interface EventPerformance {
	name: string;
	event?: string;
	location?: string;
	time?: {
		from: Date;
		to?: Date;
	};
}
