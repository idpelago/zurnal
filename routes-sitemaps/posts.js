module.exports = [
    {
        source: "/sitemap.xml",
        destination: "/sitemap/index.xml",
    },
    {
        source: "/posts/sitemap.xml",
        destination: "/sitemap/posts/index.xml",
    },
    {
        source: "/categories/sitemap.xml",
        destination: "/sitemap/categories/index.xml",
    },
    {
        source: "/posts/sitemap-post-:id.xml",
        destination: "/sitemap/posts/content.xml",
    },
];