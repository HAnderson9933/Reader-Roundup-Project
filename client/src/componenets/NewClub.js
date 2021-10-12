import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../componenets/Form';

const NewClub = (props) =>{

    const [errors, setErrors] = useState({});

    const [newClub, setNewClub] = useState({
        clubName: "",
        title: "",
        author: "",
        image: "",
        genre: "",
        description: "",
        zoomLink: "",

    })

    const newSubmitHandler =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/clubs',
        newClub, 
        {
            withCredentials: true
        }
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/club');
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.errors);
            if(err.response.status == 401){
                navigate("/");
            }
            if(err.response.data.errors){
                setErrors(err.response.data.errors);
            }
        })
    }

    return(
        <div>
            <h1 style = {{fontSize: "50px", color:"purple"}}>Add a New Book Club</h1>
            <Form
            submitHandler={newSubmitHandler}
            buttonText="Add New Book Club"
            club={newClub}
            setClub={setNewClub}
            errors={errors}
            />
        </div>
    )
}

export default NewClub;