export const ImgError = (source) => {
  source.target.onerror = null;
  source.target.style.display = "none";
};

export const detectRobot = (userAgent) => {
  const robots = new RegExp(
    [
      /bot/,
      /spider/,
      /crawl/, // GENERAL TERMS
      /APIs-Google/,
      /AdsBot/,
      /Googlebot/, // GOOGLE ROBOTS
      /mediapartners/,
      /Google Favicon/,
      /FeedFetcher/,
      /Google-Read-Aloud/,
      /DuplexWeb-Google/,
      /googleweblight/,
      /bing/,
      /yandex/,
      /baidu/,
      /duckduck/,
      /yahoo/, // OTHER ENGINES
      /ecosia/,
      /ia_archiver/,
      /facebook/,
      /instagram/,
      /pinterest/,
      /reddit/, // SOCIAL MEDIA
      /slack/,
      /twitter/,
      /whatsapp/,
      /youtube/,
      /semrush/, // OTHER
    ]
      .map((r) => r.source)
      .join("|"),
    "i"
  ); // BUILD REGEXP + "i" FLAG

  return robots.test(userAgent);
};

export const processSSR = async (userAgent, modelQuery, parameters) => {
  const response = {
    props: {},
  };

  //   const isRobot = true;
  const isRobot = detectRobot(userAgent);

  if (!isRobot) return response;

  const ssrData = await modelQuery(parameters);

  response.props = {
    ssrData,
    isRobot,
  };

  return response;
};

export const getHeaderCookie = (name, source) => {
  var nameEQ = name + "=";

  if (!source) return null;

  var ca = source.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
