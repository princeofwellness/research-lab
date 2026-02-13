import {defineEventHandler} from "h3";
import {wordpressService} from "~/server/service/wordpressService";


export default defineEventHandler(async (event) => {
    try {
        return wordpressService.getCategories();
    } catch (error) {
        return {success: false, error: error.message};
    }
})

