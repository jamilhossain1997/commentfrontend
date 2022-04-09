import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [password_confirmation ,setPassword_confirmation]=useState('');
    const [email,setEmail]=useState('');

    function handleregister(){
        let items={name,email,password}
        axios.post('/Register',items)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <div class="login-form" >
                        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="name" />
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
                        <input type="password" value={password_confirmation} onChange={e=>setPassword_confirmation(e.target.value)} placeholder="password confirmation" />
                        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email address" />
                        <button onClick={handleregister}>create</button>
                        <p class="message">Already registered? <Link to={'/'}>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register