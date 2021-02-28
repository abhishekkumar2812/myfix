import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

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
          <div className={styles.homeLeft}>image</div>
          <div className={styles.homeRight}>
            <h1> Find how to learn or teach </h1>
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


