import Layout from "../Components/Layout";

import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
  const children = <Component {...pageProps} />;
  const withLayout = Component.getLayout ?.(children) ?.(pageProps) ?? children;

  return <>{withLayout}</>
}

export default App;
