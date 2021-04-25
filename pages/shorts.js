import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Shorts.module.scss'
import ShortsModal from "../components/ShortsModal";
import LoginModal from "../components/LoginModal";

class Shorts extends React.Component {
    state = {
      isFetching: true,
      modal: false
    }

    modalOpen = (post) => {
     // e.preventDefault();
     console.log(post)
     this.setState({
        ...this.state,
        modal: true,
        modalData: post
     })
    }

    modalClose = () => {
      this.setState({
        ...this.state,
        modal: false
      })

    }
  
    componentDidMount(){
      axios.get(`https://deadtired.herokuapp.com/shorts`)
      .then((response) => {
        console.log(response);
  
        this.setState({
          isFetching: false,
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        console.log('fata')
      })
    }
  
    render() {
      return (
        <div>
          <Navbar/>
          <LoginModal/>
          <div className={styles.shortsPage}>
          {this.state.isFetching ? (
            <div>Loading...</div>
          ) : 
            <div className={styles.shortsContainer} className={styles.leftShorts}>
            {this.state.data.map(post => (
               <LearningCard  post = {post} key={post.id} onClick={this.modalOpen} />
            ))}
          </div>
        }
        <div className={styles.rightShorts}>right side bar</div>
        </div>
        {this.state.modal ? (
          <ShortsModal data={this.state.modalData} modalClose={this.modalClose}/>
        ) : 
        null}
      </div>
      )
    }
  }
  
  export default Shorts