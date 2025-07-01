import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
}

const PostCard: React.FC<PostCardProps> = ({ slug, title, date, author, description, tags }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(date)}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{author}</span>
            </div>
          </div>
          <Link
            to={`/blog/${slug}`}
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;