import React from "react";
import Layout from "../Layout/Layout";
import '../../Component/Styles/Style.css'

const Register = () => {
    return (
        <>
            <Layout>
                <div className="form-container">
                    <form>
                        <h1 className="title">Register</h1>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                id="exampleInputName1"
                                required
                            />
                        </div>
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
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="form-control"
                                id="exampleInputPhone1"
                                required
                            />
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

export default Register;