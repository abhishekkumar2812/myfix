import { Button, Alert } from "reactstrap";
import React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";

import Navbar from '../../components/Navbar.js'
import styles from '../../styles/Blog.module.scss'
import Link from "next/link";

import {supabase} from '../../utils/supabaseClient'
var parse = require('html-react-parser');


class Learn extends React.Component{
    state = {
        body: ''
    }


    fetchTodos = async () => {
        const temp = await supabase.from('blog').select('*').order('id', true)
        this.setState({
            body: temp.data[1].content
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

                <div dangerouslySetInnerHTML={{ __html: this.state.body }} />
                
            </div>
        )
    }
}
export default Learn;