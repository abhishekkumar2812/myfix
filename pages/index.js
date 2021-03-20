import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";
import Navbar from '../components/Navbar.js'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

// import pic from '../public/vercel.svg'

class Page extends React.Component {
  state = {
    isFetching: true
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className={styles.homeContainer}>
          
          <div className={styles.homeLeft}>
          <div className={styles.left} />
            {/* <img src="https://res.cloudinary.com/dmtbxzswf/image/upload/v1615108602/5293_b7jl2s.svg" className={styles.bannerImage}/>*/}
            {/* <Image src="/5293.jpg" layout='fill'/> */}
            </div> 
          <div className={styles.homeRight}>
            <h1 className={styles.title}> Find how to learn or teach </h1>
            <Link href = '/learn'>
            <div className={styles.button}>
              <span className={styles.buttonText}>Explore</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Page


