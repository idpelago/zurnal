import { getPosts } from "../../../apis";

export default async function postsHandler(req, res) {
    const { ...queries } = req.query;

    const posts = await getPosts({
        ...queries,
    });

    res.status(200).json(posts);
}
