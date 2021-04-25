import React from "react";
import App from "next/app";
import Head from "next/head";
import withData from "../lib/apollo";

// import '../styles/styles.scss'
import styles from '../styles/globals.css'
import Layout from "../components/Layout";
import Router from 'next/router';
import UserContext from "../components/UserContext";
import {supabase} from '../utils/supabaseClient';

class MyApp extends App {
  state = {
    user: null,
    loginModal: false,
    loginError: false,
    loginErrorMsg: ''
  };

  signUp = async (username, password, email) => {
    console.log('signup called')
    let { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(error){
      console.log(error)
      this.setState({
        loginError: true,
        loginErrorMsg: error.message
      })
    }
    else{
      const { data, err } = await supabase
      .from('users')
      .insert([
        { username: username, id: user.id, email: email },
      ])
      if(err){
        this.setState({
          loginError: true,
          loginErrorMsg: err.message
        })
      }
      else{
        try{
          const userData = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          localStorage.setItem('user', userData);
          this.setState({
            user: user
          });
          this.hideModal();
        }
        catch (err){
          this.setState({
            loginError: true,
            loginErrorMsg: err.message
          })
        }
      }
    }
    
  };

  signIn = async (username, password, email) => {
    console.log('sign in called')
    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: password
    })

    if(error){
      console.log(error)
      this.setState({
        loginError: true,
        loginErrorMsg: error.message
      })
    }

    try{
      const userData = await supabase.from('users').select('*').eq('id', user.id)
      localStorage.setItem('user', JSON.stringify(userData.data[0]));
      this.setState({
        user: user
      });
      this.hideModal();
    }
    catch(err){
      console.log(err)
      this.setState({
        loginError: true,
        loginErrorMsg: error.message
      })
    }
  };

  signOut = () => {
    console.log('signout called');
    localStorage.removeItem('user');
    const session = supabase.auth.session();
    const { error } = supabase.auth.signOut()

    if(error){
      this.setState({
        loginError: true,
        loginErrorMsg: error.message
      })
    }

    this.setState({
      user: null
    });
  };

  toggleModal = () => {
    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  hideModal = () => {
    this.setState({
      loginModal: false
    })
  }

  componentDidMount = () => {
    const user = supabase.auth.user()
    if (user) {
      this.setState({
        user
      });
      //this.hideModal();
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <UserContext.Provider value={{ 
          user: this.state.user,
          loginError: this.state.loginError,
          loginErrorMsg: this.state.loginErrorMsg, 
          signUp:this.signUp, 
          signIn: this.signIn, 
          signOut: this.signOut, 
          loginModal: this.state.loginModal, 
          toggleModal: this.toggleModal }}>
          <Component {...pageProps} />
        </UserContext.Provider>
        
      </Layout>
      </>
    );
  }
}

export default withData(MyApp);