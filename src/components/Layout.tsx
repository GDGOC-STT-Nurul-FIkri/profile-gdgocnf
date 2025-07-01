import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='container mx-auto px-4 py-8'>{children}</main>
      <footer className='bg-gray-900 text-white py-8 mt-16'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} GDGOC STT Nurul Fikri. All rights
            reserved.
          </p>
          <p className='text-gray-500 text-sm mt-2'>
            Dibuat dengan ❤️ untuk komunitas teknologi Indonesia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;