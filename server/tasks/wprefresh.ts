import {wordpressService} from "~/server/service/wordpressService";

export default defineTask({
    meta: {
        name: "wprefresh",
        description: "Refresh wordpress cache",
    },
    run({ payload, context }) {
        wordpressService.clearCache();
        wordpressService.getCategories()
        return { result: "Success" };
    },
});