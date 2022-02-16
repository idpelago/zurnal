import { useRouter } from "next/router";

import FeedsSection from "../../../Sections/Feeds";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getUser } from "../../../apis";
import { processSSR, processThemeCookie } from "../../../utils/helpers";

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

      <h2>User : {username}</h2>

      <FeedsSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => {
  const Component = <Layout {...props}>{children}</Layout>;

  return Component;
})(User);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { username, page = 1 } = query;
  const theme = processThemeCookie(req);

  const parameters = { username, page, theme };

  return processSSR(userAgent, getUser, parameters);
};
