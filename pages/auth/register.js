import React, { useState } from 'react';

export default function Register() {
    /* use React state */
    const [fields, setFeilds] = useState({
        email: '',
        password: ''
    });

    
    async function registerHandler(e) {
        /* e.preventDefault itu adalah unutk mencegah fungsi bawaan dari broeser pergi ke action atau mencegah relod */
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

        const registerRes = await registerReq.json();
        console.log(registerRes);
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
            </form>
        </div>
    );
}