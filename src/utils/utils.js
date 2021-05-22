const inMilliseconds = (ms) => ms;
const inSeconds = (ms) => ms / 1000;
const inMinutes = (ms) => inSeconds(ms) / 60;
const inHours = (ms) => inMinutes(ms) / 60;
const inDays = (ms) => inHours(ms) / 24;
const inWeeks = (ms) => inDays(ms) / 52;
const inMonths = (ms) => inDays(ms) / 30;
const inYears = (ms) => inDays(ms) / 365;

export const OPTIONS = {
	milliseconds: inMilliseconds,
	seconds: inSeconds,
	minutes: inMinutes,
	hours: inHours,
	days: inDays,
	weeks: inWeeks,
	months: inMonths,
};

const howlongsince = (datetime) => {
	try {
		const today = new Date();
		const milliseconds = datetime.getTime() - today.getTime();
		const results = {};
		for (const key in OPTIONS) {
			results[key] = OPTIONS[key](milliseconds);
		}
		return results;
	} catch (error) {
		console.error(error.message);
		return "failed";
	}
};

export default howlongsince;
