import React from 'react'
import Image from 'next/image'
import styles from '../../styles/homepage.module.css'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import {useState} from 'react';
import MyDrawer from '../../components/Drawer'


export default function Home() {
  return (
    <div className={styles['custom-background']}>
      <Layout>
      <MyDrawer/>
      <div>
        {
        /* Add your homepage content here */
        <p >
          <h1 font-size="100%">
            Welcome to Neurotech@Davis
          </h1>
          lorem ipsum
        
        </p>
        }
      </div>
      </Layout>
    </div>

  )
}

//className={styles['custom-background']}