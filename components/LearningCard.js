import React, { Component } from 'react';

import styles from '../styles/LearningCard.module.scss'


// import { LearningCardContainer } from './styles';
// import {Link} from 'react-router-dom';
// import Axios from 'axios';

class LearningCard extends Component{

    modalOpen = () =>{
        this.props.onClick(this.props.post)
    }

    render(){
        return(
            // onClick={this.props.onClick}
                <div className={styles.learningCardContainer} onClick={this.modalOpen}>
                    <h2 className ={styles.learningCardTitle}>
                        {this.props.post.title}
                    </h2>
                    <div className ={styles.learningCardContent}>
                    {   this.props.post.content}
                    </div>
                </div>
            
        )
    }
}

export default LearningCard;