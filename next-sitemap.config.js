/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://frozenhost.fr/',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/server-sitemap.xml'],
  };
  