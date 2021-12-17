import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getUser } from "../../../apis";
import { processSSR } from "../../../utils/helpers";

const User = (props) => {
  const router = useRouter();
  const { username } = router.query;

  const queryKey = `user/${username}`;
  const params = {
    pageType: `${username}'s`,
    queryKey,
    ...props,
  };

  return (
    <>
      <MetaHeader
        title={username}
        description={`cari semua artikel dari ${username} hanya di Zurnal.co`}
        type="user"
      />

      <NewsFeedSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => (
  <Layout {...props}>{children}</Layout>
))(User);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { username, page = 1 } = query;

  const parameters = { username, page };

  return processSSR(userAgent, getUser, parameters);
};
