import Layout from "../Components/Layout";

import { QueryClientProvider, QueryClient } from "react-query";

import queryFn from "../utils/query-fn";

import '../styles/globals.scss'

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

  return <QueryClientProvider client={queryClient}>{withLayout}</QueryClientProvider>
}

export default App;
