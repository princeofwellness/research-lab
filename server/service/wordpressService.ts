import {WordpressCategory, WordpressPost, WpRenderedObject} from "~/lib/types/wordpress";


class WordpressService {
    private readonly postsPerPage = 9;

  private readonly baseUrl: string;
  private lastHeaders: Headers | null = null;
  private cachedCategories: WordpressCategory[] | null = null;

  constructor(wordpressUrl = "") {
    this.baseUrl = wordpressUrl;
  }

  public async wpApiGet(endpoint: string, params = {}, fields: string[] = []): Promise<any> {
      const url = new URL(endpoint, this.baseUrl);

      Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
      });

      if(fields.length > 0)
        url.searchParams.append('_fields', fields.join(','));

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }


      this.lastHeaders = response.headers;

      return await response.json();
  }

  public clearCache() {
    this.cachedCategories = null;
  }


  public async getPosts(params = {}, page = 0): Promise<any> {
      const res = await this.wpApiGet(`/wp-json/wp/v2/posts`,  { per_page: this.postsPerPage, ...params}, ['id', 'title', 'slug', 'date', 'categories', 'featured_media']);


      const posts: object[] = [];
      const promises: Promise<void>[] = [];
      for (const [i, post] of (res as WordpressPost[]).entries()) {
          const resPost = {
              ...post,
              title: post.title.rendered,
              thumbnail: null
          }
          posts.push(resPost);
          if(post.featured_media){
              promises.push(this.getMedia(post.featured_media).then((featuredMedia) => {
                  resPost.thumbnail = featuredMedia?.media_details?.sizes.medium_large.source_url;
              }));
          }
      }

      await Promise.all(promises);

      return { posts, totalPages: this.lastHeaders?.get('X-WP-TotalPages')}
  }

    public getMedia(mediaId: number): Promise<any> {
        return this.wpApiGet(`/wp-json/wp/v2/media/${mediaId}`);
    }

    public async getPost(slug: string): Promise<any> {
        const res = await this.wpApiGet(`/wp-json/wp/v2/posts`, { slug }, ['id', 'title', 'slug', 'date', 'excerpt', 'content', 'categories', 'featured_media']);

        const post: any = {...res[0]};

        post.excerpt = post.excerpt.rendered;
        post.title = post.title.rendered;
        post.content = post.content.rendered;

        if (post.featured_media){
            const media = await this.getMedia(post.featured_media);
            post.image = media.media_details;
        }

        if(this.cachedCategories == null)
            await this.getCategories()

        post.categories = post.categories.filter((id: number) => id != 1).map(x => this.cachedCategories.filter(xx => xx.id === x)[0]).filter(x => x !== null)

        return post;
    }

    public getCachedCategory(id: number): WordpressCategory {
        if(this.cachedCategories == null)
            throw new Error("Categories are not cached")
        const filtered = this.cachedCategories.filter(category => category.id === id)
        if(filtered.length == 0)
            throw new Error("Category not found")

        return filtered[0]
    }

  public async getCategories(): Promise<any> {
    if(this.cachedCategories)
      return this.cachedCategories;

    try {
        const res = await this.wpApiGet('wp-json/wp/v2/categories', {per_page: 100}, ['id', 'name', 'slug', 'description'])
        const categories = (res as WordpressCategory[]).filter(x => x.id !== 1)
        this.cachedCategories = categories;

        return categories;
    } catch (e) {
        console.log(`Wordpress at ${process.env.WORDPRESS_URL} is not available...`)
        return [];
    }
  }
}

export const wordpressService = new WordpressService(process.env.WORDPRESS_URL);


