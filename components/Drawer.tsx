
"use client";

import React from 'react';
import {useState} from 'react';
import {Button, Drawer, Text, Spacer} from '@geist-ui/core'
import { Github, Menu, Home, Mail, Tool, Info, AlignCenter } from '@geist-ui/icons'

import styles from '../styles/homepage.module.css'
import Link from 'next/link';
import { Transform } from 'stream';


const MyDrawer = () => {
    const [state, setState] = React.useState(false)
    return (
      <div>
        <Button auto onClick={() => setState(true)} scale={1/2} icon={<Menu/>}>
        {/* Button icon */}
        </Button>
        <Drawer visible={state} onClose={() => setState(false)} placement="left" paddingTop={13}>
  
        <Drawer.Content >
            <Link href="/">
              <Home/>
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/About">
            <Info/>
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/Projects">
            <Tool/>
            </Link>
          </Drawer.Content>

        <Drawer.Content>
          <Link href="/ContactUs">
          <Mail/>  
          </Link>
          </Drawer.Content> 

        </Drawer>
      </div>
    )
  }

  export default MyDrawer;
