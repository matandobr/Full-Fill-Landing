export interface BlogPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  link: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

class BlogService {
  private baseUrl: string;

  constructor() {
    // Replace with your WordPress site URL
    this.baseUrl = 'https://www.blog.full-fill.ai/wp-json/wp/v2';
  }

  async getPosts(perPage: number = 12, page: number = 1): Promise<BlogPost[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/posts?_embed&per_page=${perPage}&page=${page}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  }

  async getPost(id: number): Promise<BlogPost> {
    try {
      const response = await fetch(`${this.baseUrl}/posts/${id}?_embed`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost> {
    try {
      const response = await fetch(`${this.baseUrl}/posts?slug=${slug}&_embed`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        return data[0];
      } else {
        throw new Error('Post not found');
      }
    } catch (error) {
      console.error('Error fetching blog post by slug:', error);
      throw error;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  stripHtml(html: string): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  getFeaturedImage(post: BlogPost): string {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return '/blog-placeholder.jpg';
  }

  getFeaturedImageAlt(post: BlogPost): string {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.alt_text) {
      return post._embedded['wp:featuredmedia'][0].alt_text;
    }
    return post.title.rendered;
  }
}

export const blogService = new BlogService(); 