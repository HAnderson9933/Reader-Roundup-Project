import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteClub = (props) =>{

    const {id, clubList, setClubList} = props;

    const deleteFilter = (id) => {
        let newList = clubList.filter((club) =>
        club._id !== id);
        setClubList(newList);
    }

    const deleteHandler = (e) =>{
        axios.delete(`http://localhost:8000/api/clubs/${id}`)
        .then((res) =>{
            console.log(res.data);
            if(clubList){
                deleteFilter(id);
            }
            else{
                navigate('/club');
            }
        })
        .catch((err) => console.log(err))
    }

    return(

        <div>
            <button onClick={deleteHandler}>Delete Club</button>
        </div>
    )
}

export default DeleteClub;