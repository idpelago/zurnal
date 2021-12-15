import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";

const Tag = () => {
    const router = useRouter();
    const { slug } = router.query;

    const queryKey = `tag/${slug}`;

    return <NewsFeedSection queryKey={queryKey} />;
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(Tag);