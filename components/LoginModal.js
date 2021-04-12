import React, { useContext, useState, useEffect, Component } from 'react'
import styles from '../styles/LoginModal.module.scss'
import UserContext from './UserContext';

const LoginModal = () => {
    const { signIn, signUp, loginModal, toggleModal, loginError, loginErrorMsg, user } = useContext(UserContext);
    const [username, setUsername] = useState('anon-x');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [menu, toggleMenu] = useState('LOGIN');
    const [inputError, setInputError] = useState('');
    //const [modal, toggleModal] = useState(true)

    const authenticate = e => {
        setInputError('');
        e.preventDefault();
        if (password != '' && email != '') {
            if(menu == 'REGISTER'){
                signUp(username, password, email)
            }
            else{
                signIn(username, password, email);
            }
            
        } else {
            setInputError('enter email and password');
        }
    };   

    const normal  = (
        <div className={styles.modalContainer}>
                
            <div className={styles.modalTitle}>
                <div id = "login-id" className={` ${styles.modalHeadItem} ${menu === 'LOGIN' ? styles.selected : ''}`} onClick={e => 
                        toggleMenu('LOGIN')}>login</div>
                <div id="register-id" className={`${styles.modalHeadItem} ${menu === 'REGISTER' ? styles.selected : ''}`} onClick={e => 
                    toggleMenu('REGISTER')}>register</div>
            </div>

            <h3>{`${menu === 'LOGIN' ? `Login` : `Register` }`}</h3>
            <div className={`${menu === 'LOGIN' ? styles.displayNone : ''}`}>
                <span>username</span>
                <input onChange={e => setUsername(e.target.value)}/>        
            </div>
            <div>
                <span>email</span>
            <input onChange={e => setEmail(e.target.value)}/>        
            </div>
            <div>
                <span>password</span>
            <input onChange={e => setPassword(e.target.value)}/>        
            </div>
            <div className={styles.bottom}>
                <div className={styles.submitButton} onClick={e => authenticate(e)}>{`${menu === 'LOGIN' ? `Login` : `Register` }`}</div>
                <div className={styles.cancel} onClick={e => toggleModal(false)}>cancel</div>
            </div>
            <div>
                {`${inputError !== '' ? inputError : ''}`}
            </div>
            <div>
                {`${loginError ? loginErrorMsg : ''}`}
            </div>
            
        </div>
    )

    return (
        <>
        {loginModal ? normal : null}
        </>
    )
}

export default LoginModal

