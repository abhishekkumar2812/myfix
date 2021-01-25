import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import axios from 'axios';
import { CardTitle } from "reactstrap";
import NavBar from "../../components/Navbar";


const BookName = () => {
    const router = useRouter();
    const { id } = router.query; // Destructuring our router object
    
    const [book, changebook] = useState({title: '', content: ''});

    const addBook = (temp) => {
      
      const title = temp.title;
      const content = temp.content;
      console.log(1);
      changebook({title, content})
    }

    useEffect(() => {
      axios.get(`https://deadtired.herokuapp.com/learnings/${id}`)
      .then((response) => {
        addBook(response.data)

      })
      .catch((error) => {
        console.log(error)
        console.log('fata')
      })
    }, [])

    

    return (
      <>
      <NavBar />
        <h2>
          {book.title}
        </h2>
        <div>
          {book.content}
        </div>
        
      </>
    );
  }; 

  // class BookName extends React.Component{

  //   componentDidMount(){
  //     axios.get(`https://deadtired.herokuapp.com/learnings/${id}`)
  //     .then((response) => {
  //       console.log(response);
  
  //       this.setState({
  //         isFetching: false,
  //         data: response.data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       console.log('fata')
  //     })
  //   }
  //   render(){
  //     return(
  //       <h2>
  //         {this.state.title}
  //       </h2>
  //     )
  //   }
  // }

  export default BookName;