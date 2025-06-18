import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { blogService, type BlogPost } from '@/services/blogService';

export const BlogPostPage = () => {
  const { id: slug } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('Post slug not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await blogService.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title.rendered || 'Blog Post',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5E5ADB] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg text-red-600 mb-4">
              {error || 'Post not found'}
            </p>
            <Button 
              onClick={() => navigate('/blog')}
              className="bg-[#5E5ADB] hover:bg-[#4A47B0]"
            >
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24 px-5 md:px-[120px]">
        <div className="max-w-[800px] mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="mb-8 text-[#5E5ADB] hover:text-[#4A47B0] hover:bg-[#5E5ADB]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 
                className="text-[#151357] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogService.formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-gray-500 hover:text-[#5E5ADB]"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <div className="mb-8">
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-[#222834] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigate('/blog')}
                  className="border-[#5E5ADB] text-[#5E5ADB] hover:bg-[#5E5ADB] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleShare}
                  className="text-gray-500 hover:text-[#5E5ADB]"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Post
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}; 