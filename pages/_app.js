import Script from "next/script";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

import queryFn from "../utils/query-fn";

import "nprogress/nprogress.css";
import "../styles/globals.scss";

const TopProgressBar = dynamic(
  () => import("../Components/TopProgressBar"),
  { ssr: false },
);

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
  const children = <Component {...pageProps} />;
  const withLayout = Component.getLayout ?.(children) ?.(pageProps) ?? children;

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

      <QueryClientProvider client={queryClient}>
        {withLayout}
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
