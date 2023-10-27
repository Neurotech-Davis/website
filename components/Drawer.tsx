
"use client";

import React from 'react';
import {useState} from 'react';
import {Button, Drawer, Text, Spacer} from '@geist-ui/core'
import { Github, Menu } from '@geist-ui/icons'

import styles from '../styles/navbar.module.css';
import Link from 'next/link';


const MyDrawer = () => {
    const [state, setState] = React.useState(false)
    return (
      <div>
        <Button auto onClick={() => setState(true)} scale={1/2} shadow iconRight={<Menu/>}>
        {/* Button icon */}
        </Button>
        <Drawer visible={state} onClose={() => setState(false)} placement="left">
          <Drawer.Title>Navigation</Drawer.Title>
        
        <Drawer.Content>
            <Link href="/" className={styles['nav-button']}>
            Home
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/About" className={styles['nav-button']}>
            About
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/Proects" className={styles['nav-button']}>
            About
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/ContactUs" className={styles['nav-button']}>
            Contact Us
            </Link>
          </Drawer.Content> 

        </Drawer>
      </div>
    )
  }

  export default MyDrawer;
