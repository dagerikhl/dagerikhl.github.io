import type { Link } from "../../types/Link";

export const getLinkLabel = (link?: Link): string | undefined => {
	if (!link) {
		return undefined;
	}

	if (typeof link === "string") {
		return link;
	}

	return link.label ?? link.url;
};

export const getLinkUrl = (link?: Link): string | undefined => {
	if (!link) {
		return undefined;
	}

	if (typeof link === "string") {
		return link;
	}

	return link.url;
};
