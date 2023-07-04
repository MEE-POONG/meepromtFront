// Layout.tsx
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import TheNavbar from '@/components/TheNavbar';
import TheFooter from './TheFooter';
// import TheOffcanvas from './TheOffcanvas';
const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode;
}

const TheLayOut: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <TheNavbar />
      <main className={inter.className}>{children}</main>
      <TheFooter />
    </>
  );
};

export default TheLayOut;