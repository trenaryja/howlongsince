import { intervalToDuration, isValid } from "date-fns";

export type NullableDate = Date | null | undefined;

const options = [
	{ label: "seconds", ratio: 1000 },
	{ label: "minutes", ratio: 60000 },
	{ label: "hours", ratio: 3600000 },
	{ label: "days", ratio: 86400000 },
	{ label: "weeks", ratio: 604800000 },
	{ label: "months", ratio: 2419200000 },
	{ label: "years", ratio: 31536000000 },
];

export const howlongsince = (date1: NullableDate, date2: NullableDate) => {
	if (!isValid(date1) || !isValid(date2)) return [];
	const [start, end] = [date1 as Date, date2 as Date].sort().reverse();
	const milliseconds = start.getTime() - end.getTime();
	return options.map((x) => ({ ...x, value: milliseconds / x.ratio }));
};

export const createDuration = (date1: NullableDate, date2: NullableDate) => {
	if (!isValid(date1) || !isValid(date2)) return {} as Duration;
	const [start, end] = [date1 as Date, date2 as Date].sort().reverse();
	return intervalToDuration({ start, end });
};
