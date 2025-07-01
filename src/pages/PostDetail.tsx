import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, User, Tag, Share2, Heart } from "lucide-react";
import matter from "gray-matter";
import { loadPost, Post } from "../utils/markdown";

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const postData = await loadPost(slug);
        setPost(postData);
        console.log("Slug dari URL:", slug);
        console.log("Fetching: /content/posts/" + slug + ".md");
      } catch (error) {
        console.error("Error loading post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    try {
      return new Date(dateString).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.metadata?.title || "",
          text: post.metadata?.description || "",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link telah disalin ke clipboard!");
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='text-center py-16'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>
          Artikel Tidak Ditemukan
        </h1>
        <p className='text-gray-600 mb-8'>
          Artikel yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to='/blog'
          className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'
        >
          <ArrowLeft className='mr-2 h-5 w-5' />
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  // Parsing frontmatter dan content markdown
  const { content: markdownContent, data: frontmatter } = matter(post.content);

  // Gabungkan metadata dari posts.json (post.metadata) dan fallback ke frontmatter
  const metadata = {
    title: post.metadata?.title || frontmatter.title || "Judul tidak tersedia",
    date: post.metadata?.date || frontmatter.date || "",
    author: post.metadata?.author || frontmatter.author || "-",
    description:
      post.metadata?.description ||
      frontmatter.description ||
      "Deskripsi tidak tersedia",
    tags:
      Array.isArray(post.metadata?.tags) && post.metadata.tags.length > 0
        ? post.metadata.tags
        : Array.isArray(frontmatter.tags)
        ? frontmatter.tags
        : ["(Tidak ada tag)"],
  };

  return (
    <div className='max-w-4xl mx-auto'>
      {/* Back Button */}
      <Link
        to='/blog'
        className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors'
      >
        <ArrowLeft className='mr-2 h-5 w-5' />
        Kembali ke Blog
      </Link>

      {/* Article Header */}
      <header className='mb-8'>
        <div className='flex flex-wrap gap-2 mb-4'>
          {metadata.tags.map((tag, index) => (
            <span
              key={index}
              className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
            >
              <Tag className='h-3 w-3 mr-1' />
              {tag}
            </span>
          ))}
        </div>

        <h1 className='text-4xl font-bold text-gray-900 mb-6 leading-tight'>
          {metadata.title}
        </h1>

        <div className='flex items-center justify-between flex-wrap gap-4 mb-6'>
          <div className='flex items-center space-x-6 text-gray-600'>
            <div className='flex items-center'>
              <Calendar className='h-5 w-5 mr-2' />
              <span>{formatDate(metadata.date)}</span>
            </div>
            <div className='flex items-center'>
              <User className='h-5 w-5 mr-2' />
              <span>{metadata.author}</span>
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                liked
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Heart
                className={`h-5 w-5 mr-2 ${liked ? "fill-current" : ""}`}
              />
              <span>{liked ? "Disukai" : "Suka"}</span>
            </button>
            <button
              onClick={handleShare}
              className='flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors'
            >
              <Share2 className='h-5 w-5 mr-2' />
              <span>Bagikan</span>
            </button>
          </div>
        </div>

        <p className='text-xl text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600'>
          {metadata.description}
        </p>
      </header>

      {/* Article Content */}
      <article className='prose prose-lg max-w-none'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-8'>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className='text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200'>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className='text-xl font-semibold text-gray-900 mb-3 mt-6'>
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className='text-lg font-semibold text-gray-900 mb-2 mt-4'>
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className='text-gray-700 mb-4 leading-relaxed'>{children}</p>
              ),
              ul: ({ children }) => (
                <ul className='space-y-2 mb-6 ml-4'>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className='space-y-2 mb-6 ml-4 list-decimal'>{children}</ol>
              ),
              li: ({ children }) => (
                <li className='text-gray-700 leading-relaxed'>{children}</li>
              ),
              strong: ({ children }) => (
                <strong className='font-semibold text-gray-900'>
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className='italic text-gray-800'>{children}</em>
              ),
              blockquote: ({ children }) => (
                <blockquote className='border-l-4 border-blue-600 pl-6 py-2 italic text-gray-700 my-6 bg-blue-50 rounded-r-lg'>
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className='bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono'>
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6'>
                  {children}
                </pre>
              ),
              hr: () => <hr className='border-gray-300 my-8' />,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </article>

      {/* CTA Section */}
      <div className='mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Suka dengan artikel ini?</h2>
        <p className='text-lg mb-6 opacity-90'>
          Ikuti kami untuk mendapatkan update artikel terbaru dan event menarik
          lainnya
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='https://www.instagram.com/gdgoc.nf/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'
          >
            Follow Instagram
          </a>
          <Link
            to='/blog'
            className='inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors'
          >
            Baca Artikel Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
