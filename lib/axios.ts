import axios, {AxiosHeaders, AxiosRequestConfig} from "axios";
import {createWriteStream} from "node:fs";

const baseAxiosIns = axios.create();
//
// export const downloadImage = async (imageUrl: string, outputLocationPath: string): Promise<boolean> => {
//     console.log(`Downloading iamge ${imageUrl}`)
//     const response = await baseAxiosIns.get(imageUrl, {responseType: 'stream'} as AxiosRequestConfig)
//     if (response.status != 200)
//         return false;
//
//     const writer = createWriteStream(outputLocationPath);
//     response.data.pipe(writer)
//
//     console.log(`Image downloaded to ${outputLocationPath}`)
//     return true;
// }

export const downloadImage = async (imageUrl: string, outputLocationPath: string): Promise<boolean> => {
    console.log(`Downloading iamge ${imageUrl}`)
    const response = await baseAxiosIns.get(imageUrl, {responseType: 'stream'} as AxiosRequestConfig)
    if (response.status != 200)
        return false;

    const writer = createWriteStream(outputLocationPath);

    return new Promise((resolve, reject) => {
        response.data.pipe(writer);
        writer.on('finish', () => {
            console.log(`Image downloaded to ${outputLocationPath}`)
            resolve(true);
        });
        writer.on('error', (error) => {
            console.error('Error writing file', error);
            resolve(false);
        });
    });
}