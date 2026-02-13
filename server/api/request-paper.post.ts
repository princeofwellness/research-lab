import {defineEventHandler, readBody} from "h3";

export interface DownloadLightpaperRequest {
    email: string
}


export default defineEventHandler(async (event) => {
    try {
        const {email} = await readBody<DownloadLightpaperRequest>(event)

        return {success: true, email}
    } catch (e){
        return {success: false, error: e.toString()}
    }

});