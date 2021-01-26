import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import LearningCard from "../components/LearningCard";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Shorts.module.scss'
import ShortsModal from "../components/ShortsModal";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            
            <div>email: vibrant.abhishek@gmail.com</div>
            </div>
        )
    }
}

export default Contact;