import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';

const Login = ()=>{

    const [hideshowPass, setHideshowPass] = useState(false);

    return(
        <>
            <Layout>
            <div className="form-container">
                    <form>
                        <h1 className="title">Login</h1>
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        
                        <div className="mb-3 position-relative">
                            <input
                                type={!hideshowPass ? "password" : "text"}
                                placeholder="Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                required
                            />

                            <div className="showhidePass" onClick={()=>{setHideshowPass(!hideshowPass)}}>
                                {!hideshowPass ? "Show" : "Hide"}
                            </div>
                        </div>
                        <p>Don't have an account <NavLink to="/">Register</NavLink></p>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login;