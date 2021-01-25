import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import NavBar from '../components/Navbar.js'

class Shorts extends React.Component {
    state = {
      isFetching: true
    }
  
    componentDidMount(){
      axios.get(`https://deadtired.herokuapp.com/blogs`)
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
          <NavBar/>
          {this.state.isFetching ? (
            <div>Loading...</div>
          ) : 
            <div>
            {this.state.data.map(post => (
              <div key={post.id}>
              <LearningCard  post = {post} />
              </div>
            ))}
          </div>
        }
      </div>
      )
    }
  }
  
  export default Shorts