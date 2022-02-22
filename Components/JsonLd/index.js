import Head from "next/head";

const PostJsonLd = ({ elem }) => {
    const parseISO8601 = (dateStringInRange) => {
        var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).*Z\s*$/,
            date = new Date(NaN),
            month,
            parts = isoExp.exec(dateStringInRange);
        if (parts) {
            month = +parts[2];
            date.setUTCFullYear(parts[1], month - 1, parts[3]);
            date.setUTCHours(parts[4]);
            date.setUTCMinutes(parts[5]);
            date.setUTCSeconds(parts[6]);
            if (month != date.getMonth() + 1) {
                date.setTime(NaN);
            }
        }
        return date;
    };

    const getStructDate = (dateTime) => {
        let date = new Date(dateTime).toISOString();

        return parseISO8601(date);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.zurnal.co/#organization",
                name: "zurnal",
                url: "https://www.zurnal.co/",
                sameAs: [],
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.zurnal.co/#logo",
                    inLanguage: "id-ID",
                    url: "https://www.zurnal.co/images/zurnal_logo.png",
                    width: 300,
                    height: 108,
                    caption: "zurnal",
                },
                image: {
                    "@id": "https://www.zurnal.co/#logo",
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://www.zurnal.co/#website",
                url: "https://www.zurnal.co/",
                name: "Zurnal | Entertain | Inspire & Educate",
                description: "",
                publisher: {
                    "@id": "https://www.zurnal.co/#organization",
                },
                potentialAction: [
                    {
                        "@type": "SearchAction",
                        target: "https://www.zurnal.co/searches?q={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                ],
                inLanguage: "id-ID",
            },
            {
                "@type": "ImageObject",
                "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#primaryimage`,
                inLanguage: "id-ID",
                url: elem.post_cover,
                width: 640,
                height: 370,
            },
            {
                "@type": "WebPage",
                "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#webpage`,
                url: `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/`,
                name: elem.post_description,
                isPartOf: {
                    "@id": "https://www.zurnal.co/#website",
                },
                primaryImageOfPage: {
                    "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#primaryimage`,
                },
                datePublished: getStructDate(elem.created_at),
                dateModified: getStructDate(elem.updated_at),
                description: elem.post_description,
                inLanguage: "id-ID",
                potentialAction: [
                    {
                        "@type": "ReadAction",
                        target: [
                            `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/`,
                        ],
                    },
                ],
            },
            {
                "@type": "Article",
                "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#article`,
                isPartOf: {
                    "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#webpage`,
                },
                author: {
                    "@id":
                        "https://www.zurnal.co/#/schema/person/1646c08c7af8de810bd0d35be084de95",
                },
                headline: elem.post_description,
                datePublished: getStructDate(elem.created_at),
                dateModified: getStructDate(elem.updated_at),
                commentCount: 0,
                mainEntityOfPage: {
                    "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#webpage`,
                },
                publisher: {
                    "@id": "https://www.zurnal.co/#organization",
                },
                image: {
                    "@id": `https://www.zurnal.co/post/${elem.post_slug_id}/${elem.post_slug_title}/#primaryimage`,
                },
                articleSection: elem.category.title,
                inLanguage: "id-ID",
            },
            {
                "@type": ["Person"],
                "@id":
                    "https://www.zurnal.co/#/schema/person/1646c08c7af8de810bd0d35be084de95",
                name: elem.user.username,
                image: {
                    "@type": "ImageObject",
                    "@id": "https://www.zurnal.co/#personlogo",
                    inLanguage: "id-ID",
                    url: elem.user.avatar,
                    caption: elem.user.display_name,
                },
                description: "",
            },
        ],
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Head>
    );
};

export default PostJsonLd;