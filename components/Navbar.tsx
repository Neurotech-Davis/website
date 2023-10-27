// components/Navbar.tsx
import React from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => (
<nav className={styles['nav-container']}>
    <Link href="/" className={styles['nav-button']}>
      Home
    </Link>
    <Link href="/About" className={styles['nav-button']}>
      About
    </Link>
    <Link href="/Projects" className={styles['nav-button']}>
      Projects
    </Link>
    <Link href="/ContactUs" className={styles['nav-button']}>
      Contact Us
    </Link>
  </nav>
);

export default Navbar;
