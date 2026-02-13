import type {ClipbgResponse} from "~/lib/types/clipbg";
import type {ServerResponse} from "~/lib/types/server";


export interface UploadImagesResponse extends ServerResponse {
    image_ids: string[]
}