import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

import useScrollRestoration from "../hooks/use-scroll-restoration";

import AppContext from "../context/AppContext";
import { ThemeProvider } from "../context/theme-context";

import queryFn from "../utils/query-fn";
import config from "../utils/config";

import "nprogress/nprogress.css";
import "../styles/globals.scss";

const TopProgressBar = dynamic(() => import("../Components/TopProgressBar"), {
  ssr: false,
});

const getQueryClientConfig = (req) => ({
  defaultOptions: {
    queries: {
      queryFn: (context) => queryFn({ ...context, req }),
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      // staleTime: twentyFourHoursInMs,
    },
  },
});

const queryClient = new QueryClient(getQueryClientConfig());

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const children = <Component {...pageProps} />;
  const withLayout = Component.getLayout?.(children)?.(pageProps) ?? children;

  const { minWidth } = config;
  const [mode, setMode] = useState();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMode(window.innerWidth < minWidth ? "mobile" : "desktop");

    let theme = localStorage.getItem("theme");

    localStorage.setItem("theme", theme ? theme : "light");
  }, []);

  useScrollRestoration(router);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/scripts/main.js" strategy="beforeInteractive" />

      <TopProgressBar />

      <AppContext.Provider
        value={{
          state: { mode },
          setMode: mode
        }}
      >
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            {withLayout}
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
