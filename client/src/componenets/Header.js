import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props) =>{
    
    const [currentUserId, setCurrentUserId] = useState("");
    const {reloadBoolean} = props;

    const logout = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout",{

        }, {
            withCredentials: true,
        })
        .then((res)=>{
            console.log(res.data);
            setCurrentUserId("");
            localStorage.removeItem("userId");
            navigate("/login");
        })
        .catch(err =>{
            console.log(err);
        });
    };

    useEffect(()=>{
        console.log("inside useEffect in header");
        setCurrentUserId(localStorage.getItem("userId"));
    },[reloadBoolean])


    return(

        <div style={{boarder: "5px double blue"}}>
            <ul style={{display: "flex", justifyContent:"space-around", listStyle:"none"}}>
                <li><Link style={{textDecoration:"none", fontSize:"25px", color: "purple"}} to="/club">All Clubs</Link></li>
                <li><Link style={{textDecoration:"none", fontSize:"25px", color: "purple"}} to="/club/new">Add New Club</Link></li>
                {
                    currentUserId?
                    <li><Link  style={{textDecoration:"none", fontSize:"25px", color: "purple"}} to={`/user/profile/${currentUserId}`}>Your Profile</Link></li>
                    :null
                }
                <button onClick={logout}>Logout</button>
            </ul>
        </div>
    )
}

export default Header;