import React from "react";
import Login from "./Login";
import Register from "./Register";
import {Link, navigate} from '@reach/router';

const LogReg = (props) => {
    return (
        <div>
            {/* <Login /> */}
            <hr />
            <Register />
            <Link to ={'/login'}>
            <button>Click here to login</button>
            </Link>
        </div>
    );
};

export default LogReg;