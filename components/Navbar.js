import React, { Component } from 'react';

import styles from '../styles/Navbar.module.scss'

// import {Link} from 'react-router-dom';
import Link from 'next/link'
import UserContext from './UserContext';

class Navbar extends Component{
    static contextType = UserContext;
    render(){
        const {toggleModal, signOut, user} = this.context;

        const loggedIn = (
            <div className={styles.welcomeItems} >
                <div>{user ? `welcome ${user.email}` : ''}</div>
                <div className={styles.logout} onClick={signOut}>logout</div>
            </div>
        )
        const loggedOut = (
            <div className={`${styles.welcomeItems} ${styles.logout}`} onClick = {toggleModal}>login / register</div>
        )

        return(
            <div>
                <div className={styles.navbarContainer}>
                    <div className={styles.welcomeContainer}>
                        <div className={styles.welcomeItems}>website name and logo</div>
                        
                        {user ? loggedIn : loggedOut}
                        
                    </div>
                    
                    <div className={styles.navList}>
                        <div className={styles.navItems}>
                            <Link href='/'>
                            home
                            </Link>
                        </div>

                        <div className={styles.navItems}>
                            <Link href='/shorts'>
                            shorts
                            </Link>
                        </div>

                        <div className={styles.navItems}>
                            <Link href='/blog'>
                            blog
                            </Link>
                        </div>

                        <div className={styles.navItems}>
                            <Link href='/books'>
                                books
                            </Link>
                        </div>
                        <div className={styles.navItems}>
                            <Link href='/contact'>
                                contact
                            </Link>
                        </div>
                        <div className={styles.navItems}>
                            <Link href='/learn'>
                                learn
                            </Link>
                        </div>
                        <div className={styles.navItems}>
                            <Link href='/about'>
                                about
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;