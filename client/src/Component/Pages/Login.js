import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ()=>{

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    console.log(inpval)

    const setVal = async (e)=>{
        const {name, value} = e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]: value
            }
        })
    }

    const loginUser = async (e)=>{
        e.preventDefault();
        const {email, password} = inpval;

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                {email, password}
            )

            if (res && res.data.success) {
                navigate("/dashboard")
            } else {
                console.log("error in login")
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                                value={inpval.email}
                                name="email"
                                onChange={setVal}
                                placeholder="Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        
                        <div className="mb-3 position-relative">
                            <input
                                type={!hideshowPass ? "password" : "text"}
                                value={inpval.password}
                                name="password"
                                onChange={setVal}
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
                        <button type="submit" className="btn btn-primary" onClick={loginUser}>
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login;