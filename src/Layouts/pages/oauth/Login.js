import {useContext, useState} from "react";
import AdminContext from "../../../Contexts/Admin/AdminContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {

    const [loading, setLoading] =   useState(false)
    const [email, setEmail] =   useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();
    const adminContext = useContext(AdminContext)



    const loginFormHandler = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.post('/auth/login', {
            email: email,
            password: password
        }).then(function (res) {
            setLoading(false)

            adminContext.dispatchApp({type: 'admin_login', payload: {
                    token: res.data.token,
                    admin: res.data.admin
            }})

            document.body.className = 'hold-transition sidebar-mini layout-fixed';
            navigate("/", { replace: true });
            axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.token; //set token

        }).catch(function (err) {
            if(err.response.status == 422) {
                alert(err.response.data.message)
            }
            setLoading(false)
        })
    }

    return(
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Admin Panel</b></a>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Enter Your Email And Password</p>

                    <form onSubmit={loginFormHandler}>
                        <div className="input-group mb-3">
                            <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                        </div>
                        <div className="row">


                            <div className="col-4">
                                {
                                    loading ?
                                        <h6>loading...</h6>
                                        :
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                }
                            </div>

                        </div>
                    </form>


                </div>

            </div>
        </div>
    )
}