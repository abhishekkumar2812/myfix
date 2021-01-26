import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Home.module.scss'

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
        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerHead}>About this site</h2>
          <div className={styles.bannerContent}>this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. this is site is only me understanding things. </div>
        </div>

        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerHead}>About this site</h2>
          <div className={styles.bannerContent}>this is site is only me understanding things</div>
        </div>

        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerHead}>About this site</h2>
          <div className={styles.bannerContent}>this is site is only me understanding things</div>
        </div>
      </div>
    )
  }
}

export default Page


