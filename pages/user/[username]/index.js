import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

import { getUser } from "../../../apis";
import { detectRobot } from "../../../utils/helpers";

const User = (props) => {
    const router = useRouter();
    const { username } = router.query;

    const queryKey = `user/${username}`;

    return (
        <>
            <MetaHeader
                title={username}
                description={`cari semua artikel dari ${username} hanya di Zurnal.co`}
                type="user"
            />

            <NewsFeedSection
                pageType={`${username}'s`}
                queryKey={queryKey}
                {...props} />
        </>
    );
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(User);

export const getServerSideProps = async ({ req, query }) => {
    const response = {
        props: {},
    };

    const userAgent = req.headers["user-agent"];
    const isRobot = detectRobot(userAgent);

    if (!isRobot) return response;

    const { username, page = 1 } = query;
    const ssrData = await getUser({ username, page });

    response.props = {
        ssrData,
        isRobot,
    };

    return response;
};
