import type { EventPerformance } from "../types/EventPerformance";
import type { Person } from "../types/Person";

export interface IWorkshop {
	name: string;
	authors: Person[];
	url?: string;
	abstract?: string;
	performances?: EventPerformance[];
}
