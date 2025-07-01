import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import PostCard from "../components/PostCard";
import { loadPostsMetadata, PostMetadata } from "../utils/markdown";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<(PostMetadata & { slug: string })[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<
    (PostMetadata & { slug: string })[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await loadPostsMetadata();
        setPosts(postsData);
        setFilteredPosts(postsData);

        // Ambil tag unik dari semua post
        const tags = Array.from(
          new Set(postsData.flatMap((post) => post.tags))
        );
        setAllTags(tags);
      } catch (error) {
        console.error("Error loading posts metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedTag]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTag("");
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto'>
      {/* Hero */}
      <div className='text-center mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Blog GDGOC STT Nurul Fikri
        </h1>
        <p className='text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
          Berbagi pengalaman, pembelajaran, dan insight seputar teknologi dari
          komunitas kami
        </p>
      </div>

      {/* Search & Filter */}
      <div className='mb-8 space-y-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='text'
              placeholder='Cari artikel...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='relative'>
            <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className='pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
            >
              <option value=''>Semua Tag</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(searchTerm || selectedTag) && (
          <div className='flex items-center gap-2 text-sm'>
            <span className='text-gray-600'>Filter aktif:</span>
            {searchTerm && (
              <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full'>
                "{searchTerm}"
              </span>
            )}
            {selectedTag && (
              <span className='px-3 py-1 bg-purple-100 text-purple-800 rounded-full'>
                {selectedTag}
              </span>
            )}
            <button
              onClick={clearFilters}
              className='text-gray-500 hover:text-gray-700 underline'
            >
              Hapus filter
            </button>
          </div>
        )}
      </div>

      {/* Posts */}
      {filteredPosts.length === 0 ? (
        <div className='text-center py-16'>
          <div className='text-gray-400 mb-4'>
            <Search className='h-16 w-16 mx-auto' />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>
            Tidak ada artikel ditemukan
          </h3>
          <p className='text-gray-600'>
            Coba ubah kata kunci pencarian atau filter yang digunakan
          </p>
        </div>
      ) : (
        <>
          <div className='mb-6'>
            <p className='text-gray-600'>
              Menampilkan {filteredPosts.length} dari {posts.length} artikel
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                author={post.author}
                description={post.description}
                tags={post.tags}
              />
            ))}
          </div>
        </>
      )}

      {/* Newsletter CTA */}
      <div className='mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center'>
        <h2 className='text-2xl font-bold mb-4'>
          Ingin Mendapat Update Terbaru?
        </h2>
        <p className='text-lg mb-6 opacity-90'>
          Ikuti media sosial kami untuk mendapatkan notifikasi artikel terbaru
          dan event menarik
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
          <a
            href='https://www.youtube.com/@googledscsttnf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors'
          >
            Subscribe Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
