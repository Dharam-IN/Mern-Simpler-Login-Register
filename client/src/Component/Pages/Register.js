import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../../Component/Styles/Style.css';

const Register = () => {

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        phone: ""
    });

    console.log(inpval)

    const setVal = async (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const navigate = useNavigate()

    const addData = async (e) => {
        e.preventDefault();
        const {fname, email, password, phone} = inpval;

        if (!fname || !email || !password || !phone) {
            console.log("Please fill all fields")
        } else {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                    {fname, email, password, phone}
                )
                if (res && res.data) {
                    console.log(res.data.message);
                } else {
                    console.log("Unexpected response format:", res);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }


    const [hideshowPass, setHideshowPass] = useState(false);

    return (
        <>
            <Layout>
                <div className="form-container">
                    <form>
                        <h1 className="title">Register</h1>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={inpval.fname}
                                onChange={setVal}
                                name="fname"
                                placeholder="Name"
                                className="form-control"
                                id="exampleInputName1"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={inpval.email}
                                onChange={setVal}
                                name="email"
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
                                onChange={setVal}
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                required
                            />

                            <div className="showhidePass" onClick={() => { setHideshowPass(!hideshowPass) }}>
                                {!hideshowPass ? "Show" : "Hide"}
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={inpval.phone}
                                onChange={setVal}
                                name="phone"
                                placeholder="Phone"
                                className="form-control"
                                id="exampleInputPhone1"
                                required
                            />
                        </div>
                        <p>Allready have an account <NavLink to="/login">Login</NavLink></p>
                        <button type="submit" onClick={addData} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Register;