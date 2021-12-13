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

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js"></script>
      <script src="/scripts/main.js"></script>

      <QueryClientProvider client={queryClient}>{withLayout}</QueryClientProvider>
    </>
  )
}

export default App;
