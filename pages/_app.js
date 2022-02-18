import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

import useScrollRestoration from "../hooks/use-scroll-restoration";

import AppContext from "../context/AppContext";
import { ThemeProvider } from "../context/theme-context";

import * as ga from "../utils/gtag";
import queryFn from "../utils/query-fn";
import config from "../utils/config";

import { shouldTrack, loadStylesheet, loadScript } from "../utils/helpers";
import { GA_TRACKING } from "../utils/gtag";

import "bootstrap/dist/css/bootstrap.min.css";
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

const App = ({ Component, pageProps, shouldTrack }) => {
  const router = useRouter();
  const children = <Component {...pageProps} />;
  const withLayout = Component.getLayout?.(children)?.(pageProps) ?? children;

  const { minWidth } = config;
  const [mode, setMode] = useState();
  const trackEvents = (url) => {
    if (shouldTrack) {
      ga.pageview(url);
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", trackEvents);

    return () => {
      router.events.off("routeChangeComplete", trackEvents);
    };
  }, [router.events]);

  useEffect(() => {
    setMode(window.innerWidth < minWidth ? "mobile" : "desktop");

    const styles = [
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css",
    ];

    const scripts = [
      "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6209f866f185a6e6",
    ];

    styles.map((style) => loadStylesheet(style));
    scripts.map((script) => loadScript(script));
  }, []);

  useScrollRestoration(router);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING}');
          `}
      </Script>

      <TopProgressBar />

      <AppContext.Provider
        value={{
          state: { mode },
          setMode: mode,
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

App.getInitialProps = async (context) => {
  const ctx = context.ctx;

  const { req } = ctx;
  const currentIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const track = shouldTrack(currentIp);

  return {
    track,
  };
};

export default App;
