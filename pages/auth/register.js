import React, { useState } from 'react';
import { unauthPage } from '../../middlewares/authorizationPage';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);
    // console.log(context.req.headers);
    // console.log(allCookies);
    // console.log(allCookies.token);  
    return { props: {} }
}

export default function Register() {
    /* use React state */
    const [fields, setFeilds] = useState({
        email: '',
        password: ''
    });

    const [status, setStatus] = useState('normal');
    
    async function registerHandler(e) {
        /* e.preventDefault itu adalah unutk mencegah fungsi bawaan dari broeser pergi ke action atau mencegah relod */
        setStatus('loading...');

        e.preventDefault();
        // console.log(feilds);
    
        /* Hit to register api */
        const registerReq = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!registerReq.ok) return setStatus('error' + registerReq.status)

        const registerRes = await registerReq.json();
        // console.log(registerRes);

        setStatus('success');   
    }
    
    function feildHandler(e) {
        // setFeilds({ email: e.target.value });
        const name = e.target.getAttribute('name');

        setFeilds({
            ...fields,
            [name]: e.target.value
        });
    }
    
    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={registerHandler.bind(this)}>
                <input name="email" onChange={feildHandler.bind(this)} type="text" placeholder="Email" /><br/>
                <input name="password" onChange={feildHandler.bind(this)} type="password" placeholder="Password" />
                <br />
                <button type="submit">
                    Register
                </button>

                <div>Output: {status}</div>
            </form>
        </div>
    );
}