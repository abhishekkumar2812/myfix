import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import BookCard from "../components/BookCard.js";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Books.module.scss'
import Link from "next/link";
import LoginModal from "../components/LoginModal.js";

class Books extends React.Component {
    state = {
      isFetching: true
    }
  
    componentDidMount(){
      axios.get(`https://deadtired.herokuapp.com/books`)
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
          {this.state.isFetching ? (
            <div>Loading...</div>
          ) : 
            <div className={styles.bookCardWrapper}>
            {this.state.data.map(post => (
              <Link as={`/books/${post.id}`} href="/books/[id]" key={post.id}>
                <a className = {styles.anchorFlex}>
                    <BookCard  post = {post} />
                    </a>
              </Link>
            ))}
          </div>
        }
          
        </div>
      )
    }
  }
  
  export default Books