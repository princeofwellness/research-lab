// server/api/__sitemap__/wordpress.ts
import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    const posts = await $fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`);

    return posts.map(post => ({
        loc: `/blog/${post.slug}`, // NOT post.link
        lastmod: post.modified,
        changefreq: 'weekly',
        priority: 0.7,
    }))
})