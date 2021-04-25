import React, { Component } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../styles/BlogCard.module.scss'

class BlogCard extends Component{
    componentDidMount(){
        //console.log(this.props.post)
    }

    render(){
        return(
            
                <div className={styles.blogCardContainer}>
                    <div className={styles.imageContainer} >
                        <img src={this.props.post.cover} alt= 'nahi' className={styles.coverStyle}/>
                    </div>

                    <div className={styles.detailsContainer}>
                        
                            <h4 className={styles.title}>{this.props.post.title}</h4>
                        
                        <div className={styles.intro}>{this.props.post.intro}</div>
                        <div className={styles.info}>
                            <span>    time: {this.props.post.time} </span>
                        </div>
                    </div>

                </div>
            
        )
    }
}

export default BlogCard;