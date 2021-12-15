import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

const PostContent = (props) => {
    const router = useRouter();
    const { postSlugId, postSlugTitle } = router.query;

    return (
        <>
            Content
        </>
    )
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(PostContent);
