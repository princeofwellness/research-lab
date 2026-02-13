import {defineEventHandler, readBody} from "h3";




export default defineEventHandler(async (event) => {
    const bodyParameters = await readBody(event);

    const veoVideoUrl = veoService.generateVideo(bodyParameters.prompt, "16:9");

    return {
        success: true,
        output: veoVideoUrl
    };
})

