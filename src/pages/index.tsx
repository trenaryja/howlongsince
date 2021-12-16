import { useState } from "react";
import { DateTimePicker } from "@mui/lab";
import { TextField, Container, Button, Typography } from "@mui/material";
import { formatDuration, parseISO } from "date-fns";
import DataTable from "../components/DataTable";
import { createDuration, NullableDate } from "../utils";

export default function Index() {
	const [value, setValue] = useState<NullableDate>(new Date());
	const duration = createDuration(new Date(), value);

	return (
		<Container maxWidth="xs" sx={{ p: 2, display: "grid", gap: 2, justifyItems: "center" }}>
			<DateTimePicker
				value={value}
				minDate={parseISO("0001-01-01")}
				onChange={setValue}
				renderInput={(params) => <TextField {...params} />}
			/>

			<Button variant="contained" onClick={() => setValue(new Date())}>
				Reset
			</Button>

			<Typography textAlign={"center"}>{formatDuration(duration)}</Typography>

			<DataTable value={value} />
		</Container>
	);
}
