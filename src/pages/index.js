import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
	ThemeProvider,
	CssBaseline,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import {
	MuiPickersUtilsProvider,
	DatePicker,
	TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import theme from "../utils/theme";
import howlongsince from "../utils/utils";

const Index = () => {
	const [date, setDate] = useState(new Date());

	const handleDateChange = (datetime) => {
		setDate(datetime);

		const list = document.getElementById("list");
		list.innerHTML = "";
		var results = Object.entries(howlongsince(datetime));

		results.map(([key, value]) => {
			const p = document.createElement("p");
			p.innerHTML = `${key} ${value}`;
			list.append(p);
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<title>How Long Since?</title>
			</Helmet>
			<CssBaseline />
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<DatePicker
						autoOk
						orientation="landscape"
						variant="static"
						value={date}
						onChange={handleDateChange}
					/>
					<TimePicker
						autoOk
						orientation="landscape"
						variant="static"
						value={date}
						onChange={handleDateChange}
					/>
					<div id={"list"}></div>
				</div>
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	);
};

export default Index;
