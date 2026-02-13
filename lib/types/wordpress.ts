

export interface WpRenderedObject {
    rendered: string
}


export interface WordpressPost {
    id: string
    title: WpRenderedObject
    slug: string
    date: string
    categories: number[]
    featured_media: number
}

export interface WordpressCategory {
    id: number
    description: string
    name: string
    slug: string
}