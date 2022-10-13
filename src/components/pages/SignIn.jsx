import React from 'react'
import { Link, useNavigate} from 'react-router-dom';

import Button from '../Button'

const SignIn = () =>{ 
        let navigate = useNavigate();
        const dashPage =()=>{ 
            let path = `/dashboard`; 
        navigate(path);
        }
        
    return (
        <>
            <section className="grid" > 
                <div className="left">
                    <div className="login-header">
                        <img src="./images/logo.png" alt="login logo" className="login-logo"/> 
                    </div>
                    <div className="login--banner"> 
                            <img src="./images/sign-in.png" alt="login banner"/> 
                    </div>
                </div>
                <div className="right">                         
                        <div className="login-form__wrap"> 
                            <h2 className="sign-in__message"> Welcome!</h2>
                            <p className="sign-in__para">Enter details to login.</p>
                            <form className="login-form">
                                <div className="form-field">
                                    <input type="email" className="form--input" required placeholder='Email' />
                                </div>
                                <div className="form-field">
                                    <input type="password" className="form--input" placeholder='Password' />
                                    <small className="show-pwrd">show</small>
                                </div>
                                <div className="btn-link">
                                    <Link to='/dashboard' className="pwrd-link"> FORGOT PASSWORD?</Link>
                                    <Button buttonColor="primary" onClick={dashPage}>LOG IN</Button> 
                                </div>    
                            </form>     
                        </div>
                </div> 
            </section>
        </>
    )
}

export default SignIn;