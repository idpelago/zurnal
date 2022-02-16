import Layout from "../Components/Layout";
import WithLayout from "../Components/WithLayout";
import MetaHeader from "../Components/MetaHeader";

import FeedsSection from "../Sections/Feeds";

import { getPosts } from "../apis";
import { processSSR, processThemeCookie } from "../utils/helpers";

const Index = (props) => {
  const queryKey = `posts`;
  const params = { queryKey, ...props };

  return (
    <>
      <MetaHeader type="index" />

      <FeedsSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => {
  const Component = <Layout {...props}>{children}</Layout>;

  return Component;
})(Index);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { page = 1 } = query;
  const theme = processThemeCookie(req);

  const parameters = { page, theme };

  return processSSR(userAgent, getPosts, parameters);
};
