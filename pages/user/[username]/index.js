import { useRouter } from "next/router";

import NewsFeedSection from "../../../Sections/NewsFeed";

import Layout from "../../../Components/Layout";
import WithLayout from "../../../Components/WithLayout";
import MetaHeader from "../../../Components/MetaHeader";

const User = () => {
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

            <NewsFeedSection pageType={`${username}'s`} queryKey={queryKey} />
        </>
    );
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(User);