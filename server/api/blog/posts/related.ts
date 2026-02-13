import fs from "fs";
import {defineEventHandler, readBody} from "h3";



export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)

        const posts = await $fetch(`wp-json/wp/v2/posts`, {
            baseURL: process.env.WORDPRESS_URL,
            params: {
                orderby: 'rand',
                per_page: query.limit ?? 3,
                exclude: query.postId,
                _fields: [
                    'id',
                    'title',
                    'slug',
                    'date',
                    '_links.wp:featuredmedia'
                ].join(',')
            }
        })


        const promises: Promise[] = [];
        for (const [i, post] of posts.entries()) {
            post.title = post.title.rendered;
            const featuredMediaLink = post._links['wp:featuredmedia'];
            if (featuredMediaLink != undefined) {
                promises.push($fetch(featuredMediaLink[0].href).then((featuredMedia) => {
                    posts[i].thumbnail = featuredMedia.media_details.sizes.medium_large.source_url;
                    delete posts[i]._links;
                }));
            }
        }

        await Promise.all(promises);


        return posts;
    } catch (error) {
        return {success: false, error: error.message};
    }
})

