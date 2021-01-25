import React, { Component } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../styles/BookCard.module.scss'

class LearningCard extends Component{



    render(){
        return(
            
                <div className={styles.bookCardContainer}>
                    <div className={styles.imageContainer}>
                        image
                    </div>

                    <div className={styles.detailsContainer}>
                        
                            <div className={styles.title}>{this.props.post.title}</div>
                        
                        <div className={styles.author}>author</div>
                        <div className={styles.rating}>rating</div>
                    </div>

                </div>
            
        )
    }
}

export default LearningCard;