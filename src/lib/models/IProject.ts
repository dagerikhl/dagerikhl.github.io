import type { Link } from "../types/Link";
import type { Person } from "../types/Person";

export interface IProject {
	name: string;
	type?: string;
	authors: Person[];
	homepage?: string;
	links?: Link[];
	abstract?: string;
}
