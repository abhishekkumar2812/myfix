import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Home.module.scss'
import LoginModal from "../components/LoginModal";

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
        <LoginModal/>
        <div className={styles.bannerContainer}>
          <h2 className={styles.bannerHead}>About this site</h2>
          <div className={styles.bannerContent}>This site contains a mix of things including some info about me, some of my notes, some opinions, some reviews and basically whatever I feel like. It is sort of a project for having a presence on Internet</div>
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


