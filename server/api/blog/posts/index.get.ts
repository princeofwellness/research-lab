import {defineEventHandler} from "h3";

import {wordpressService} from "~/server/service/wordpressService";




export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const params: any = {page: query.page ?? 1};
        if(query.categories)
            params.categories = query.categories;

        const posts = await wordpressService.getPosts(params, 9);

        return {
            success: true,
            ...posts,
            categories: await wordpressService.getCategories()
        };
    } catch (error) {
        return {success: false, error: error.message};
    }
})

