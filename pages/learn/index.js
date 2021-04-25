import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";

import Navbar from '../../components/Navbar.js'
import styles from '../../styles/Learn.module.scss'
import Link from "next/link";
import LoginModal from "../../components/LoginModal.js";

class Learn extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <LoginModal/>
                <div className={styles.topicContainer}>
                    <Link href = '/learn/economics'>
                    <div className={styles.topicCard}>
                        ecomoics
                    </div>
                    </Link>
                    <div className={styles.topicCard}>
                        development
                    </div>
                    <div className={styles.topicCard}>
                        statistics
                    </div>
                    <div className={styles.topicCard}>
                        statistics
                    </div>
                    <div className={styles.topicCard}>
                        statistics
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Learn;