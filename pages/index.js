import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

// const QUERY = gql`
//   {
//     blogs {
//       id
//       title
//       content
//     }
//   }
// `;



class Page extends React.Component {
  state = {
    isFetching: true
  }

  componentDidMount(){
    axios.get(`${API_URL}/blogs`)
    .then((response) => {
      console.log(response);
      this.setState({
        isFetching: false,
        data: response.data
      })
    })
  }

  render() {
    console.log(1);
    return (
      <div>
        {this.state.isFetching ? (
          <div>Loading...</div>
        ) : 
          <ul>
          {this.state.data.map(restaurant => (
            <li key={restaurant.id}>{restaurant.title}
              <div>{restaurant.content}</div>
            </li>
          ))}
        </ul>
      }
    </div>
    )
  }
}

export default Page


