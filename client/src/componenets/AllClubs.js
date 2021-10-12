import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteClub from './DeleteClub';

const AllClubs = (props) =>{
    let username = "";
    if (props.user.username !== "") {
        username = props.user.username;
    }else{
        username = "Fellow Book Lover";
    }
    const [clubList, setClubList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/clubs')
        .then((res) =>{
            console.log(res.data);
            setClubList(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])

    return(

        <div>
            <h1 style = {{fontSize: "50px", color:"purple", fontFamily: "fantasy"}}>Welcome {username} to The Reader Roundup!</h1>
            <h2 style = {{color: "lightsteelblue"}}>Discover and create book clubs with friends!</h2>
            <div style={{display: "flex", justifyItems: "space-around"}}>
                {
                    clubList.map((club, index) =>(
                        
                        <div style={{border: "10px dotted purple", padding:"50px", borderRadius:"130px", backgroundColor:"lightsteelblue", padding:"50px", margin:"30px"}} key={index}> 
                            
                            <Link style ={{textDecoration:"none", color:"purple", textDecoration: "underline"}} to={`/club/${club._id}`}>
                                <p style={{fontSize: "30px"}}>{club.clubName}</p>
                                <img src={club.image} alt="book image" style={{width: "150px", height: "150px"}}/>
                            </Link>
                            <div>
                                <p style={{fontSize: "20px"}}>{club.description}</p>
                            </div>
                            <br/>
                            
                            <Link style ={{textDecoration:"none", color: "purple", fontSize: "20px"}} to={`/user/profile/${club.user_id?._id}`}><p>Added By: {club.user_id?.username}</p></Link>
                            {/* <DeleteClub clubList={clubList} setClubList= {setClubList} id = {club._id} /> */}
                            <Link to={`/user/profile/${club.user_id?._id}`}><button>Join This Club!</button></Link>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default AllClubs;