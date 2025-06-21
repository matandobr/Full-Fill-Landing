import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogService, type BlogPost } from '@/services/blogService';

export const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await blogService.getPosts(12);
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleReadMore = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5E5ADB] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg text-red-600 mb-4">Error: {error}</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-[#5E5ADB] hover:bg-[#4A47B0]"
            >
              Try Again
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
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[#151357] text-4xl md:text-5xl font-bold mb-6">
              Full-Fill Blog
            </h1>
            <p className="text-[#222834] text-xl max-w-3xl mx-auto">
              Insights, tips, and updates on Customer Questionnaires automation, sales engineering, and AI-powered solutions.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blogService.getFeaturedImage(post)}
                      alt={blogService.getFeaturedImageAlt(post)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogService.formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-[#151357] line-clamp-2">
                      {blogService.stripHtml(post.title.rendered)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-[#222834] line-clamp-3 mb-4">
                      {blogService.stripHtml(post.excerpt.rendered)}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#5E5ADB] text-[#5E5ADB] hover:bg-[#5E5ADB] hover:text-white"
                      onClick={() => handleReadMore(post.slug)}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No blog posts found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}; 