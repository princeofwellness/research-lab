import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import fs from "fs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export const capitalizeWord = (word: string) => word ? word.charAt(0).toUpperCase() + word.slice(1) : ""

export const readFileAsDataURL = async (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const getUserFilePath = (fileId: string) => `./public/uploads/userFiles/${fileId}`
export const readUserFileAsBase64 = (imageId: string) => {
  const imageBuffer = fs.readFileSync(getUserFilePath(imageId));
  const base64Image = imageBuffer.toString('base64');

  return base64Image;
}