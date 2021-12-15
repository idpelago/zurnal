import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

const Tag = () => {
    const router = useRouter();
    const { slug } = router.query;

    const queryKey = `tag/${slug}`;

    return (
        <>
            <MetaHeader
                title={slug}
                description={`cari semua artikel dengan tagar ${slug} hanya di Zurnal.co`}
                type="tag"
            />

            <NewsFeedSection pageType={`# ${slug}`} queryKey={queryKey} />
        </>
    );
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(Tag);