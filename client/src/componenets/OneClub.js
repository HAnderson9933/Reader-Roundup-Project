import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteClub from './DeleteClub';

const OneClub = (props) =>{

    const [oneClub, setOneClub] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/clubs/${[props.id]}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setOneClub(res.data);
        })
        .catch((err) => console.log(err))
    }, [])




    return(

        <div>
            {
                oneClub ?
                <div>
                    <p style={{fontSize: "30px", color: "purple", fontFamily: "fantasy"}}>{oneClub.clubName}</p>
                    <img src={oneClub.image} alt="book image"style={{width: "350px", height: "320px"}}/>
                    <div style={{display: "inline-block", margin: "20px", contain: "layout", textAlign: "justify", borderTop:"dotted purple", fontSize:"x-large" }}>
                    <p>Title: {oneClub.title}</p>
                    <p>By: {oneClub.author}</p>
                    <p>Genre: {oneClub.genre}</p>
                    <p>Description: {oneClub.description}</p>
                    <p>Zoom Link: {oneClub.zoomLink}</p>
                    </div>
                </div>
                :null
            }
        </div>
    )
}

export default OneClub;