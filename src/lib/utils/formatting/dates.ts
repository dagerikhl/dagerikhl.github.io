import dayjs, { type ConfigType } from "dayjs";

interface FormatConfig {
	showTime?: boolean;
	showTimeIfNotMidnight?: boolean;
}
export const formatDate = (date?: ConfigType, config?: FormatConfig): string => {
	if (!date) {
		return "";
	}

	const dayjsDate = dayjs(date);

	let format = "DD.MM.YYYY";
	if (
		config?.showTime ||
		(config?.showTimeIfNotMidnight && (dayjsDate.hour() !== 0 || dayjsDate.minute() !== 0))
	) {
		format += " HH:mm";
	}

	return dayjsDate.format(format);
};
