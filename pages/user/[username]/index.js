import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";

const User = () => {
    const router = useRouter();
    const { username } = router.query;

    const queryKey = `user/${username}`;

    return <NewsFeedSection queryKey={queryKey} />;
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(User);