import React, { useState } from 'react';
import './css/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/home')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>

            <div className='login__container'>
                <h1 style={{ userSelect: "none" }}>Log in</h1>

                <form>
                    <h5 style={{ userSelect: 'none' }}>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5 style={{ userSelect: 'none' }}>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                        className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register}
                    className='login__registerButton'>Create your RainForest Account</button>
            </div>
        </div>
    )
}

export default Login;
