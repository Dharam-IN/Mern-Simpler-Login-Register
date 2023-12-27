import React from 'react'
import Layout from '../Layout/Layout';

const Login = ()=>{
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
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                required
                            />

                            <div className="showhidePass">
                                Show
                            </div>
                        </div>
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