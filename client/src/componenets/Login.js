import React, {useState} from "react";
import axios from "axios";
import {navigate} from '@reach/router';

const Login = (props) =>{

    const{user, setUser} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {reloadBoolean, setReloadBoolean} = props;

    const login = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users/login", {
            email: email,
            password: password,
        },
        {
            withCredentials: true,
        }
        )
        .then((res) =>{
            console.log(res.cookie, "cookie");
            console.log(res, "res");
            console.log(res.data, 'is res data');
            localStorage.setItem("userId", res.data.userId);
            console.log(res.data.userId);
            setReloadBoolean(!reloadBoolean);
            // setUser({
            //     username: res.data.userLoggedIn,
            //     id: res.data.userId
            // });
            navigate("/club");
        })
        .catch(err => {
            console.log(err.response);
            setErrorMessage(err.response.data.message);
        });
    };

    return (
        <div>
            <h2 style={{fontSize: "30px", color: "purple", fontFamily: "fantasy"}}>Login</h2>
            <p className="error-text">{errorMessage ? errorMessage : ""}</p>
            {
                user ? 
                <p>You are logged in as {user}</p>
                :<p>Please log in!</p>
            }
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button
                        type="submit"
                        >Sign In</button>
                </div>
            </form>
        </div>
    );

};

export default Login;