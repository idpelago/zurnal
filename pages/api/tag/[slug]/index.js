import { getTag } from "../../../../apis";
import protectApi from "../../../../middleware/protectApi";

async function postHandler(req, res) {
  const { ...queries } = req.query;

  const post = await getTag({
    ...queries,
  });

  res.status(200).json(post);
}

export default protectApi(postHandler);
