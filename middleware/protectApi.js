const SITE_URL = process.env.SITE_URL;
const ENV_APP = process.env.ENV_APP;

const protectApi = (handler) => {
  return async (req, res) => {
    if (ENV_APP == "production") {
      if (
        !req.headers.referer ||
        new URL(req.headers.referer).origin !== SITE_URL
      ) {
        return res.status(403).json({ success: false, message: `Forbidden` });
      }
    }

    return handler(req, res);
  };
};

export default protectApi;
