import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from './Form';

const EditClub = (props) =>{

    const [errors, setErrors] = useState({});

    const [editedClub, setEditiedClub] = useState({
        clubName: "",
        title: "",
        author: "",
        image: "",
        genre: "",
        description: "",
        zoomLink: "",
    })

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/clubs/${props.id}`)
        .then((res)=>{
            console.log(res.data);
            setEditiedClub(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])

    const editClubHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/clubs/${props.id}`,
        editedClub
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/club');
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }





    return(

        <div>
            <h1 style = {{fontSize: "50px", color:"purple"}}>Edit Your Book Club</h1>
            <Form
            submitHandler={editClubHandler}
            buttonText="Update Club"
            club={editedClub}
            setClub = {setEditiedClub}
            errors={errors}
            />
        </div>
    )
}

export default EditClub;