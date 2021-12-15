import { getPost } from "../../../../../apis";

export default async function postHandler(req, res) {
    const { ...queries } = req.query;

    const post = await getPost(
        {
            ...queries,
        }
    );

    res.status(200).json(post);
}
