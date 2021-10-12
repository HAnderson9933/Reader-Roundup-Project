import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteClub from './DeleteClub';

const UserProfile = (props) =>{

    const {user} = props;

    const [userClubList, setUserClubList] = useState([]);
    const [userPage, setUserPage] = useState({});
    // const [user, setUser] = useState({});
    const {id} = props;

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/clubs/user/${id}`)
        .then((res) =>{
            console.log(res.data);
            setUserClubList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then((res) =>{
            console.log(res.data);
            setUserPage(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    // useEffect(() =>{
    //     axios.get(`http://localhost:8000/api/users/${id}`)
    //     .then((res) =>{
    //         console.log(res.data);
    //         setUser(res.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[])




    return(
        <div>
            <h1 style = {{fontSize: "50px", color:"purple", fontFamily: "fantasy"}}>Welcome to {userPage.username}'s Profile!</h1>

            {
                userClubList.map((club, index) =>(
                    <div className= "listItem" key={index}>
                        
                        <p>{club.name}</p>
                        <img src={club.image} alt="book image" style={{width: "350px", height: "320px"}}/>
                        <div style={{display: "inline-block", margin: "20px", contain: "layout", textAlign: "justify", borderTop:"dotted purple", fontSize:"x-large" }}>
                        <p>Title: {club.title}</p>
                        <p>By: {club.author}</p>
                        <p>{club.genre}</p>
                        <p>Description: {club.description}</p>
                        <p>Zoom Link: {club.zoomLink}</p>
                        </div>
                        <div style={{display: "inline-flex"}}>
                        <Link to={`/club/edit/${club._id}`}>
                                
                                {/* {
                                    club.createdByUserName && user.id === club.createdByUserName._id ? */}
                                    <button>Edit Book Club</button>
                                    {/* :null
                                } */}
                            </Link>
                    <DeleteClub id={club._id}/>
                    {/* <p>{club.user_id?.username}</p> */}
                    <button>Join This Club!</button>
                    </div>
                    </div>
                ))
            }
            

        </div>
    )

}

export default UserProfile;