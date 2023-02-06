import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
        fontFamily: "Open Sans, sans serif",
        shadows: {
          xs: "-1px 1px 4px #BE4BDB, 1px -1px 4px #228BE6",
          sm: "-1px 1px 5px 2px #BE4BDB, 2px -2px 5px 2px #228BE6",
          md: "-3px 3px 5px 2px #BE4BDB, 3px -3px 5px 2px #228BE6",
          lg: "-5px 5px 10px 3px #BE4BDB, 5px -5px 10px  3px #228BE6",
          xl: "-8px 8px 70px 5px #BE4BDB, 8px -8px 70px 5px #228BE6",
        },
        components: {
          Text: {
            defaultProps: {
              color: "white",
            },
          },
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
