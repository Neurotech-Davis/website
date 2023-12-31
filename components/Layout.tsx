// components/Layout.tsx
import React, { ReactNode } from 'react';
import '../styles/main.module.css' 

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="main">
  </div>
);

export default Layout;