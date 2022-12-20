import React, { useState } from 'react';
import Navbar from '../../../layouts/front-end/Navbar';
import axios from 'axios';

function Registration() {
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmpass: ''
    });

    const handleInput = (e) => {
        setRegister({...registerInput, [e.target.name]: e.target.value});
    };

    const registerSubmit = (e) => {
        e.preventDefault();
        console.log(registerInput);
        axios.post(`/api/register`, registerInput).then(res => {

        })
    }
    return (
        <>
            <Navbar/>
            <div className="container py-5">
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                Registration Form
                            </div>
                            <div className='card-body'>
                                <form onSubmit={registerSubmit}>
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control form-control-sm" placeholder="Fullname"/>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control form-control-sm" placeholder="Email"/>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control form-control-sm" placeholder="Password"/>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="password" name="confirmpass" onChange={handleInput} value={registerInput.confirmpass} className="form-control form-control-sm" placeholder="Confirm Password"/>
                                    </div>
                                    <button type='submit' className='btn btn-sm btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;