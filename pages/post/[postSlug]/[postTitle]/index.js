import { useRouter } from "next/router";

import Layout from "../../../../Components/Layout";
import WithLayout from "../../../../Components/WithLayout";

import PostContentSection from "../../../../Sections/PostContent";
import NewsFeedRightSection from "../../../../Sections/NewsFeed/RightSide";

const PostContent = (props) => {
    const router = useRouter();
    const { postSlugId, postSlugTitle } = router.query;

    return (
        <section className="utf_block_wrapper">
            <div className="container">
                <div className="row">
                    <PostContentSection
                        postSlugId={postSlugId}
                        postSlugTitle={postSlugTitle} />

                    <NewsFeedRightSection />
                </div>
            </div>
        </section>
    )
}

export default WithLayout((children) => (props) => (
    <Layout {...props}>{children}</Layout>
))(PostContent);
