import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { loadAbout } from "../utils/markdown";
import { Users, Mail, Instagram, Linkedin } from "lucide-react";

const About: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const aboutContent = await loadAbout();
        setContent(aboutContent);
      } catch (error) {
        console.error("Error loading about content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto'>
      {/* Hero Section */}
      <div className='text-center mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6'>
          <Users className='h-8 w-8' />
        </div>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Tentang GDGOC STT Nurul Fikri
        </h1>
        <p className='text-xl text-gray-600 leading-relaxed'>
          Mengenal lebih dekat komunitas teknologi yang menginspirasi dan
          mengembangkan talenta digital di STT Nurul Fikri
        </p>
      </div>

      {/* Content */}
      <div className='prose prose-lg max-w-none'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-8'>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className='text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200'>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className='text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center'>
                  <div className='w-1 h-6 bg-blue-600 rounded-full mr-3'></div>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className='text-xl font-semibold text-gray-900 mb-3 mt-6'>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className='text-gray-600 mb-4 leading-relaxed'>{children}</p>
              ),
              ul: ({ children }) => (
                <ul className='space-y-2 mb-6'>{children}</ul>
              ),
              li: ({ children }) => (
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <span className='text-gray-600'>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className='font-semibold text-gray-900'>
                  {children}
                </strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className='border-l-4 border-blue-600 pl-4 italic text-gray-700 my-6'>
                  {children}
                </blockquote>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Contact Section */}
      <div className='mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Hubungi Kami</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <a
            href='mailto:dsc@nurulfikri.ac.id'
            className='flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
          >
            <Mail className='h-6 w-6 mr-3' />
            <div>
              <p className='font-semibold'>Email</p>
              <p className='text-sm opacity-90'>dsc@nurulfikri.ac.id</p>
            </div>
          </a>
          <a
            href='https://www.instagram.com/gdgoc.nf/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
          >
            <Instagram className='h-6 w-6 mr-3' />
            <div>
              <p className='font-semibold'>Instagram</p>
              <p className='text-sm opacity-90'>@gdgoc.nf</p>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/company/gdscnf/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
          >
            <Linkedin className='h-6 w-6 mr-3' />
            <div>
              <p className='font-semibold'>LinkedIn</p>
              <p className='text-sm opacity-90'>
                GDG On Campus · STT Terpadu Nurul Fikri
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
