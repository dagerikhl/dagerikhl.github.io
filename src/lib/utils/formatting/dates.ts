export const formatDateOrDatetime = (date?: Date, forceShowTime = false): string => {
	if (!date) {
		return "";
	}

	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, "0");
	const day = `${date.getDate()}`.padStart(2, "0");

	const formattedDate = `${year}-${month}-${day}`;

	const isDateAndDatetime = forceShowTime || date.getHours() !== 0 || date.getMinutes() !== 0;
	if (!isDateAndDatetime) {
		return formattedDate;
	}

	const hours = `${date.getHours()}`.padStart(2, "0");
	const minutes = `${date.getMinutes()}`.padStart(2, "0");

	return `${formattedDate} ${hours}:${minutes}`;
};
