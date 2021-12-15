import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;

    const queryKey = `category/${slug}`;

    return (
        <>
            <MetaHeader
                title={slug}
                description={`cari semua artikel dari kategori ${slug} hanya di Zurnal.co`}
                type="category"
            />

            <NewsFeedSection pageType={`${slug}`} queryKey={queryKey} />
        </>
    );
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(Category);