import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, Zap, Globe, BookOpen, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className='space-y-16'>
      {/* Hero Section */}
      <section className='text-center py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='mb-8'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6'>
              <img
                src='logo/gdgocnf_logo.jpg'
                alt='Logo GDGoC STT Nurul Fikri'
                className='object-cover rounded-full mx-auto'
              />
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              GDGOC STT Nurul Fikri
            </h1>
            <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
              Komunitas teknologi yang menginspirasi dan mengembangkan talenta
              digital di lingkungan STT Nurul Fikri
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/about'
              className='inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg'
            >
              Tentang Kami
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
            <Link
              to='/blog'
              className='inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600'
            >
              <BookOpen className='mr-2 h-5 w-5' />
              Baca Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
          <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4'>
            <Users className='h-6 w-6' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>500+</h3>
          <p className='text-gray-600'>Mahasiswa Terlatih</p>
        </div>
        <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
          <div className='inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4'>
            <Zap className='h-6 w-6' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>25+</h3>
          <p className='text-gray-600'>Event & Workshop</p>
        </div>
        <div className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
          <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4'>
            <Globe className='h-6 w-6' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>50+</h3>
          <p className='text-gray-600'>Industry Partners</p>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Mengapa Bergabung dengan Kami?
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Kami menyediakan platform terbaik untuk mengembangkan kemampuan
            teknologi dan membangun network profesional
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Feature 1 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4'>
              <BookOpen className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Pembelajaran Berkualitas
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Workshop dan bootcamp dengan kurikulum terkini yang dirancang oleh
              praktisi industri berpengalaman.
            </p>
          </div>

          {/* Feature 2 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mb-4'>
              <Users className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Komunitas Aktif
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Bergabung dengan komunitas yang supportive dan kolaboratif untuk
              saling belajar dan berkembang.
            </p>
          </div>

          {/* Feature 3 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4'>
              <Globe className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Industry Network
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Akses ke network profesional dan peluang karir di perusahaan
              teknologi terkemuka.
            </p>
          </div>

          {/* Feature 4 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg mb-4'>
              <Code className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Hands-on Projects
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Praktik langsung dengan project nyata yang bisa menjadi portfolio
              untuk melamar kerja.
            </p>
          </div>

          {/* Feature 5 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg mb-4'>
              <Zap className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Mentoring Program
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Bimbingan personal dari senior developer dan industry expert untuk
              percepatan karir.
            </p>
          </div>

          {/* Feature 6 */}
          <div className='p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4'>
              <Calendar className='h-6 w-6' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Event Reguler
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Tech talk, hackathon, dan networking event yang diadakan secara
              rutin sepanjang tahun.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Siap Untuk Bergabung?</h2>
        <p className='text-xl mb-8 opacity-90'>
          Mari bersama-sama membangun masa depan teknologi Indonesia
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/about'
            className='inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'
          >
            Pelajari Lebih Lanjut
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
          <a
            href='mailto:gdgoc@sttbandung.ac.id'
            className='inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors'
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;