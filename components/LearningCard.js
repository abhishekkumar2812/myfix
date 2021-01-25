import React, { Component } from 'react';

import styles from '../styles/LearningCard.module.scss'


// import { LearningCardContainer } from './styles';
// import {Link} from 'react-router-dom';
// import Axios from 'axios';

class LearningCard extends Component{

    // state = {
    //     title:'',
    //     content:''
    // };

    render(){
        return(
            <div>
                <div className={styles.learningCardContainer}>
                <div>
                    {this.props.post.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default LearningCard;