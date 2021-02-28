import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";

import Navbar from '../../components/Navbar.js'
import styles from '../../styles/Learn.module.scss'
import Link from "next/link";

class Economics extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                
            </div>
        )
    }
}
export default Economics;