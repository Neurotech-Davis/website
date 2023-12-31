// ./componenents/Drawer.tsx

"use client";

import React from 'react';
import {useState} from 'react';
import {Button, Drawer, Text, Spacer} from '@geist-ui/core'
import { Users, Book, Home, Mail, Code, Info, DollarSign, Shield, ChevronDown} from '@geist-ui/icons'

import styles from '../styles/homepage.module.css'
import Link from 'next/link';
import { Transform } from 'stream';


const MyDrawer = () => {
    const [state, setState] = React.useState(false)
    return (
      <div>
        <Button
        scale={1}
        style={{ borderRadius: '50%', width: '70px', height: '70px' }} // Set width and height to create a circular button
        auto
        type="abort" // Set type to "abort" for a transparent button 
        onClick={() => setState(true)}
        color='black' 
        icon={<ChevronDown style={{ color: 'back' }}/>}>
        </Button>
        <Drawer visible={state} onClose={() => setState(false)} placement="bottom">
  
        <Drawer.Content style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' , alignItems:'center'}}>
            <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Home/>
              <div>
                Home
              </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/About" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Info/>
                <div>
                  About Us
                </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/Projects" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Code/>
              <div>
                Projects
              </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/Publications" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Book/>  
              <div>
                Publications
              </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/Outreach" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Users/> 
              <div>
                Users
              </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/Entreprenuership" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <DollarSign/> 
              <div>
                Entreprenuership
              </div>
            </Link>

            <Spacer/>
            <Spacer/>

            <Link href="/Executive" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Shield/> 
              <div>
                Executive
              </div>
            </Link>

          </Drawer.Content>
        </Drawer>
      </div>
    )
  }

  export default MyDrawer;
