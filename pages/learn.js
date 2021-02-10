import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import BookCard from "../components/BookCard.js";

import Navbar from '../components/Navbar.js'
import styles from '../styles/Books.module.scss'
import Link from "next/link";

class Learn extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                hello
            </div>
        )
    }
}
export default Learn;