import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { howlongsince, NullableDate } from "../utils";

interface Props {
	value: NullableDate;
}

const DataTable = ({ value }: Props) => {
	if (!value) return null;
	const now = new Date();
	const results = howlongsince(now, value);
	const showResults = results.some((x) => x.value > 0);
	if (!showResults) return null;

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Measurement</TableCell>
						<TableCell align="right">Value</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{results.map((row) => (
						<TableRow key={row.label} sx={{ "&:last-child td": { border: 0 } }}>
							<TableCell>{row.label}</TableCell>
							<TableCell align="right">{row.value.toFixed(4)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
