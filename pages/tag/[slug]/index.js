import { useRouter } from "next/router";

import FeedsSection from "../../../Sections/Feeds";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getTag } from "../../../apis";
import { processSSR, processThemeCookie } from "../../../utils/helpers";

const Tag = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const queryKey = `tag/${slug}`;
  const params = {
    pageType: `# ${slug}`,
    queryKey,
    ...props,
  };

  return (
    <>
      <MetaHeader
        title={slug}
        description={`cari semua artikel dengan tagar #${slug} hanya di Zurnal.co`}
        type="tag"
      />

      <h2>Tagar : #{slug}</h2>

      <FeedsSection {...params} />
    </>
  );
};

export default WithLayout((children) => (props) => {
  const Component = <Layout {...props}>{children}</Layout>;

  return Component;
})(Tag);

export const getServerSideProps = async ({ req, query }) => {
  let userAgent = req.headers["user-agent"];

  const { slug, page = 1 } = query;
  const theme = processThemeCookie(req);

  const parameters = { slug, page, theme };

  return processSSR(userAgent, getTag, parameters);
};
