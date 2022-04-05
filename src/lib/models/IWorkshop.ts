import type { EventPerformance } from "../types/EventPerformance";
import type { Link } from "../types/Link";
import type { Person } from "../types/Person";

export interface IWorkshop {
	name: string;
	authors: Person[];
	links?: Link[];
	abstract?: string;
	performances?: EventPerformance[];
}
