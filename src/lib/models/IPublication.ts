import type { Link } from "../types/Link";
import type { Person } from "../types/Person";

export interface IPublication {
	name: string;
	type?: string;
	date?: number;
	authors: Person[];
	links?: Link[];
	abstract?: string;
}
