import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;

    const queryKey = `category/${slug}`;

    return <NewsFeedSection pageType={`${slug}`} queryKey={queryKey} />;
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(Category);