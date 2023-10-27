'use client'
import React from 'react'
import styles from '../../styles/homepage.module.css'
import Layout from '../../components/Layout'
import MyDrawer from '../../components/Drawer'
import TypedHeading from '../../components/TypedHeading'
import { Spacer, Collapse, Text, Card} from '@geist-ui/core'
import { Bold } from '@geist-ui/icons'

export default function Home() {
  return (
    <div className={styles['custom-background']}>
      <Layout>
      <MyDrawer/>
      <div>
        {
        /* Add your homepage content here */
        <p >
          <h1>
            <TypedHeading/>
          </h1>
          <br>
          </br>

          <h2>
          Discover the limitless potential of your brain - Dive into the world of neurotechnology with us.
          </h2>
         
          <br/>
          <div className={styles['container']}>
        
            <h2>
            What do we do?
            </h2>

        </div>
        <div className={styles['container']}>
            <h2>
              How do we do it?
            </h2>
        </div>

        </p>
        }
      </div>
      </Layout>
    </div>

  )
}

//className={styles['custom-background']}