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
import LoginModal from "../components/LoginModal";

// import pic from '../public/vercel.svg'

class Page extends React.Component {
  state = {
    isFetching: true
  }

  render() {
    return (
      <div>
        <Navbar/>
        <LoginModal/>
        <div className={styles.homeContainer}>
          
          <div className={styles.homeLeft}>
          <div className={styles.left} />
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


