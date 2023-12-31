'use client'
import React from 'react'
import styles from '../../styles/main.module.css'
import Layout from '../../components/Layout'
import MyDrawer from '../../components/Drawer'
import TypedHeading from '../../components/TypedHeading'
import { Spacer, Collapse, Text, Card} from '@geist-ui/core'
import { AlignCenter, Bold } from '@geist-ui/icons'

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
        {
          /* Add your homepage content here */
          <p >
          <h1>
            <TypedHeading/>
          </h1>
          <br></br>

              <h2 className='styles.center' >
              Discover the limitless potential of your brain - Dive into the world of neurotechnology with us.
              </h2>

          <center>
            <div>
              <MyDrawer/>
            </div>
          </center>
         
        </p>
        }
      </div>
      <Layout>
        <div>
          
        </div>
      </Layout>
    </div>
  )
}
