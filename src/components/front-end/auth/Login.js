import React from 'react';
import Navbar from '../../../layouts/front-end/Navbar';

function Login() {
    return (
        <>
            <Navbar/>
            <div className="container py-5">
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                Login Form
                            </div>
                            <div className='card-body'>
                                <form>
                                    
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="email" name="" className="form-control form-control-sm" placeholder="Email"/>
                                    </div>
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" name="" className="form-control form-control-sm" placeholder="Password"/>
                                    </div>
                                    
                                    <button type='submit' className='btn btn-sm btn-primary'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;