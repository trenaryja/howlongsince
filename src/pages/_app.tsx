import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";

import theme from "../styles/theme";

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>How Long Since?</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link rel="icon" type="image/svg+xml" href="/logo.svg" />
			</Head>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<CssBaseline />
						<Component {...pageProps} />
					</LocalizationProvider>
				</ThemeProvider>
			</StyledEngineProvider>
		</React.Fragment>
	);
}
