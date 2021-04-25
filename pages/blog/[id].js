import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import axios from 'axios';
import { CardTitle } from "reactstrap";
import Navbar from "../../components/Navbar.js";
import ReactMarkdown from 'react-markdown';
import LoginModal from "../../components/LoginModal.js";


import {supabase} from '../../utils/supabaseClient'

import styles from '../../styles/Blog.module.scss'

const BlogName = ({data}) => {

    // const router = useRouter();
    // const { id } = router.query; // Destructuring our router object
    
    // const [blog, changebook] = useState({title: '', content: null, cover:''});

    // const addBlog = (temp) => {
      
    //   const title = temp.data[0].title;
    //   const content = temp.data[0].content;
    //   const cover = temp.data[0].cover;
    //  // console.log(1);
    //   changebook({title, content, cover})
    // }

    // const fetchTodos = async () => {
    //   const temp = await supabase.from('blog').select('*').eq('id', id)
    //   console.log(temp)
    //   addBlog(temp)
    // }

    // useEffect(() => {
    //   fetchTodos();
    // }, [])

    

    return (
      <>
      <Navbar />
      <LoginModal/>
        
        <div className={styles.bodyContainer}>
        <h2>
          {data.title}
        </h2>
          {/* <ReactMarkdown source={book.content}/> */}
          <div>
          <div className={styles.imageContainer}>
          <img src={data.cover} alt= 'nahi' className={styles.coverStyle}/>
          </div>
          <div>
            <div>
              time
            </div>
            <div>
              likes
            </div>
            <div>
              author
            </div>
          </div>
          </div>
          <div className={styles.textContainer}>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </>
    );
  }; 

  export default BlogName;

  export async function getServerSideProps(context) {

    const id = context.params.id;
    const temp = await supabase.from('blog').select('*').eq('id', id);
    //console.log(temp)
    const title = temp.data[0].title;
    const content = temp.data[0].content;
    const cover = temp.data[0].cover;

    const data = {title, content, cover}

    return { props: { data } }
  }