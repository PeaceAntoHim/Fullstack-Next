import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { unauthPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);
    // console.log(context.req.headers);
    // console.log(allCookies);
    // console.log(allCookies.token);  
    return { props: {} }
}


export default function Login() {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    });

    const [status, setStatus] = useState('normal');

    /* set session login*/
  /*   useEffect(() => {
        console.log('update');
        const token = Cookie.get('token');

         console.log(token);
        /* Cek jika token sudah di pakai maka */
    /*     if(token) return Router.push('/posts');
    }, []); */

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

        /* Use Router to access posts page */
        Router.push('/posts');
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

