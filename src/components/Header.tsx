import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-3 hover:opacity-90 transition-opacity'
          >
            <div className='bg-white rounded-full p-1'>
              <img
                src='/logo/gdgocnf_logo.jpg'
                alt='Logo GDGOC STT Nurul Fikri'
                className='w-10 h-10 rounded-full object-cover'
              />
            </div>
            <div>
              <h1 className='text-xl font-bold'>GDGOC</h1>
              <p className='text-xs opacity-90'>STT Nurul Fikri</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10 text-white/90 hover:text-white"
              }`}
            >
              <span>Beranda</span>
            </Link>
            <Link
              to='/about'
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("/about")
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10 text-white/90 hover:text-white"
              }`}
            >
              <Users className='h-4 w-4' />
              <span>Tentang Kami</span>
            </Link>
            <Link
              to='/blog'
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("/blog")
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10 text-white/90 hover:text-white"
              }`}
            >
              <BookOpen className='h-4 w-4' />
              <span>Blog</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 border-t border-white/20'>
            <div className='flex flex-col space-y-2 pt-4'>
              <Link
                to='/'
                onClick={toggleMenu}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/")
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                }`}
              >
                <span>Beranda</span>
              </Link>
              <Link
                to='/about'
                onClick={toggleMenu}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/about")
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                }`}
              >
                <Users className='h-4 w-4' />
                <span>Tentang Kami</span>
              </Link>
              <Link
                to='/blog'
                onClick={toggleMenu}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive("/blog")
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                }`}
              >
                <BookOpen className='h-4 w-4' />
                <span>Blog</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;