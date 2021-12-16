import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: amber[300],
		},
	},
});

export default theme;
