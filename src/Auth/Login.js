import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState({});
    const navigate=useNavigate();
    // useEffect(() => {
    //     if(localStorage.getItem('token')){
    //         navigate.push('/comment')
    //    }
    //  }, [])
   

    function heandlelogin(){
        let items={email,password}
        axios.post('/login',items)
        .then(res=>{
            console.log(res);
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            navigate('/comment');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <div class="login-form">
                        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
                        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
                        <button onClick={heandlelogin}>login</button>
                        <p class="message">Not registered? <Link to={'/register'} >Create an account</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login