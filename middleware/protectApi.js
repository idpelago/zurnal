const SITE_URL = process.env.SITE_URL;

const protectApi = (handler) => {
  return async (req, res) => {
    console.log("req.headers.referer : ", req.headers.referer);
    if (new URL(req.headers.referer).origin !== SITE_URL) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectApi;
