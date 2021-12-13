import Script from "next/script";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {

    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        let date = new Date();
        let year = date.getFullYear();

        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="google-site-verification"
                        content="nJt6gwBgHkE7LfyPHtHzwrjsKftGQS31wRwFoFWFSIU"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-title" content="IDPELAGO" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="black-translucent"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="email=no" />
                    <meta httpEquiv="Cache-Control" content="no-siteapp" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        name="Copyright"
                        content={`@${year} IDPELAGO All Rights Reserved.`}
                    />
                    <meta property="fb:app_id" content="1016516678465561" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="600" />
                    <meta property="og:type" content="website" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta
                        name="msapplication-TileImage"
                        content="https://www.idpelago.com/img/favicon-touch-logo-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="https://www.idpelago.com/img/favicon-16x16.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="https://www.idpelago.com/img/favicon-32x32.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="https://www.idpelago.com/img/favicon-touch-logo-180x180.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="192x192"
                        href="https://www.idpelago.com/img/favicon-touch-logo-192x192.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="512x512"
                        href="https://www.idpelago.com/img/favicon-touch-logo-512x512.png"
                    />
                    <link rel="mask-icon" href="" color="#5bbad5" />
                    <link rel="dns-prefetch" href="//ajax.googleapis.com" />
                    <link rel="dns-prefetch" href="//fonts.gstatic.com" />
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="dns-prefetch" href="//partner.gooleadservices.com" />
                    <link rel="dns-prefetch" href="//google.com.tw" />
                    <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
                    <link rel="dns-prefetch" href="//google-analytics.com" />
                    <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
                    <link rel="dns-prefetch" href="//pubads.g.doubleclick.net" />
                    <link rel="dns-prefetch" href="//graph.facebook.com" />
                    <link rel="dns-prefetch" href="//facebook.com" />
                    <link rel="dns-prefetch" href="//connect.facebook.net" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" strategy="lazyload" />

                    <script src="http://utouchdesign.com/themes/envato/altroz_news/js/jquery-3.2.1.min.js"></script>
                    <script src="http://utouchdesign.com/themes/envato/altroz_news/js/bootstrap.min.js"></script>
                    <script src="/scripts/main.js"></script>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document;