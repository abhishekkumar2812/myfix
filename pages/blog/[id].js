import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from 'react';
import getConfig from 'next/config';
import axios from 'axios';
import { CardTitle } from "reactstrap";
import Navbar from "../../components/Navbar.js";
import ReactMarkdown from 'react-markdown';
import LoginModal from "../../components/LoginModal.js";
import UserContext from "../../components/UserContext"

import {supabase} from '../../utils/supabaseClient'

import styles from '../../styles/Blog.module.scss'

const BlogName = ({data}) => {

    const router = useRouter();
    const { id } = router.query; // Destructuring our router object
    const [likes, setLikes] = useState(0);
    const [blogData, setBlogData] = useState([]);
    const [liked, setLiked] = useState(false)

    const { user, toggleModal } = useContext(UserContext);

    const fetchData = async () => {
      const temp = await supabase.from('likes').select('id, user_id').eq('blog_id', id);
      setBlogData(temp.data);
      const size = temp.data.length;
      setLikes(size);
      console.log(size);

      if(user){
        for (var i=0; i < temp.data.length; i++) {
          if(temp.data[i].user_id == user.id){
            console.log('found');
            setLiked(true);
          }
        }
      }
    }

    const likeClick = async () => {
      if(user){
          const temp = await supabase.from('likes').select('id, user_id').eq('blog_id', id);
          for (var i=0; i < temp.data.length; i++) {
            if(temp.data[i].user_id == user.id){
              console.log('found');
              console.log('already liked')
              setLiked(true);
              return;
            }
          }
        const { data, err } = await supabase
        .from('likes')
        .insert([
          { user_id: user.id, blog_id: id, type: 'blog' },
        ])

        console.log(data);
        console.log(err);
        return;
      }
      else{
        toggleModal();
      }
    }

    useEffect(() => {
      fetchData();
    }, [])

    return (
      <>
      <Navbar />
      <LoginModal/>
        
        <div className={styles.bodyContainer}>
        <h2>
          {data.title}
        </h2>
          {/* <ReactMarkdown source={book.content}/> */}
          <div className={styles.blogHeader}>
          <div className={styles.imageContainer}>
          <img src={data.cover} alt= 'nahi' className={styles.coverStyle}/>
          </div>
          <div className={styles.infoContainer}>
            <div>
              time :{data.time}
            </div>
            <div>
              likes : {likes}
            </div>
            <div>
              author : {data.author}
            </div>
          </div>
          <div className={styles.controlsContainer}>
            <div>
              <span className={styles.likeButton} onClick={likeClick}>like</span>
              {/* <span className={styles.dislikeButton}>dislike</span> */}
            </div>
            <div>share</div>
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
    const title = temp.data[0].title;
    const content = temp.data[0].content;
    const cover = temp.data[0].cover;
    const author = temp.data[0].author;
    const time = temp.data[0].time;

    const data = {title, content, cover, author, time}

    return { props: { data } }
  }