import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";

import Navbar from '../../components/Navbar.js'
import styles from '../../styles/Blog.module.scss'
import Link from "next/link";

import {supabase} from '../../utils/supabaseClient'
import LoginModal from "../../components/LoginModal.js";
import BlogCard from "../../components/BlogCard"
var parse = require('html-react-parser');


class Blog extends React.Component{
    state = {
        body: []
    }

    fetchTodos = async () => {
        const temp = await supabase.from('blog').select('id, title, cover, intro, time, author').order('id', {ascending: false}).limit(10)
        this.setState({
            // body: temp.data[1].content
            body: temp.data
        })
        console.log(temp)
    }
    componentDidMount(){
        this.fetchTodos()
    }

    render(){
        return(
            <div>
                <Navbar/>
                <LoginModal/>

                <div className={styles.blogCardWrapper}>
                    {this.state.body.map(post => (
                    <Link as={`/blog/${post.id}`} href="/blog/[id]" key={post.id} style={{ textDecoration: 'none' }}>
                        <a className = {styles.anchorFlex}>
                            <BlogCard  post = {post} />
                            </a>
                    </Link>
                    ))}
                </div>
               
                {/* <div dangerouslySetInnerHTML={{ __html: this.state.body }} /> */}
                
            </div>
        )
    }
}
export default Blog;