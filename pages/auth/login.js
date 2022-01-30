import React, { useState } from 'react';
import Cookie from 'js-cookie';

export default function Login() {

    const [fields, setFields] = useState({
        email: '',
        password: ''
    });

    const [status, setStatus] = useState('normal');

    async function loginHandler(e) {
        e.preventDefault();
        // console.log(fields);

        setStatus('loading...');

        const loginReq = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields)
        });

        if(!loginReq.ok) return setStatus('error' + loginReq.status);
        
        const loginRes = await loginReq.json();

        setStatus('Success');
        // console.log(loginRes);\
        Cookie.set('token', loginRes.token);
    }

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');

        setFields({
            ...fields,
            [name]: e.target.value  
        });
    }

    return (
        <div>
            <h1>login</h1>
            
            <form onSubmit={loginHandler.bind(this)}>
                <input onChange={fieldHandler.bind(this)} type="text" name="email" placeholder="Email..." />
                <input onChange={fieldHandler.bind(this)} type="password" name="password" placeholder="Password..." />

                <button type="submit">
                    Login
                </button>

                <div>Status: {status}</div>
            </form>
        </div>  
    );
}

