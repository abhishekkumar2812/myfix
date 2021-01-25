import React, { Component } from 'react';

import styles from '../styles/Navbar.module.scss'

// import {Link} from 'react-router-dom';
import Link from 'next/link'

class NavBar extends Component{

    render(){
        return(
            <div>
                <div className={styles.navbarContainer}>
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
                            <Link href='/books'>
                                books
                            </Link>
                        </div>
                        <div className={styles.navItems}>
                            <Link href='/contact'>
                                contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;