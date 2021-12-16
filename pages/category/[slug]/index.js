import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getCategory } from "../../../apis";
import { detectRobot } from "../../../utils/helpers";

const Category = (props) => {
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

            <NewsFeedSection
                pageType={`${slug}`}
                queryKey={queryKey}
                {...props} />
        </>
    );
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(Category);

export const getServerSideProps = async ({ req, query }) => {
    const response = {
        props: {},
    };

    const userAgent = req.headers["user-agent"];
    const isRobot = detectRobot(userAgent);

    if (!isRobot) return response;

    const { slug, page = 1 } = query;
    const ssrData = await getCategory({ slug, page });

    response.props = {
        ssrData,
        isRobot,
    };

    return response;
};
