// components/Layout.tsx
import React, { ReactNode } from 'react';

import styles from '../styles/homepage.module.css'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles['custom-background']} style={{ background: 'rgba(255, 255, 255, 0.5)', minHeight: '100vh'}}>
    {children}
  </div>
);

export default Layout;