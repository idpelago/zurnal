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

import { GA_TRACKING } from "../utils/gtag";

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
  console.log("shouldTrack : ", shouldTrack);
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

  const blacklistedIps = ["::1", "61.222.146.133"];
  const currentIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  let shouldTrack;

  if (blacklistedIps.includes(currentIp)) {
    shouldTrack = false;
  } else {
    shouldTrack = true;
  }

  return {
    shouldTrack,
  };
};

export default App;
