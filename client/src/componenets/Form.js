import React, {useState, useEffect} from 'react';

const Form = (props) => {
    
    const {submitHandler, buttonText, club, setClub, errors} = props;

    const newChangeHandler =(e) => {
        let newStateObject = {...club};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target);
        setClub(newStateObject);
    }

    return(
        <form onSubmit= {submitHandler}>
            <div>
                <label htmlFor = "clubName">Club Name: </label>
                <input onChange={newChangeHandler} name="clubName" type="text" value={club.clubName} />
                {
                    errors.clubName ?
                    <span style={{color:"red"}}>{errors.clubName.message}</span>
                    :null
                }
            </div>
            <div>
                <label htmlFor = "title">Book Title: </label>
                <input onChange={newChangeHandler} name="title" type="text" value={club.title} />
                {
                    errors.title ?
                    <span style={{color:"red"}}>{errors.title.message}</span>
                    :null
                }
            </div>
            <div>
                <label htmlFor = "author">Author: </label>
                <input onChange={newChangeHandler} name="author" type="text" value={club.author} />
                {
                    errors.author ?
                    <span style={{color:"red"}}>{errors.author.message}</span>
                    :null
                }
            </div>
            <div>
                <label htmlFor = "image">Image URL: </label>
                <input onChange={newChangeHandler} name="image" type="text" value={club.image} />
                {
                    errors.image ?
                    <span style={{color:"red"}}>{errors.image.message}</span>
                    :null
                }
            </div>
            <div>
                <label htmlFor = "genre">Genre: </label>
                <select onChange={newChangeHandler} name="genre" value={club.genre}>
                    <option value="none" defaultValue hidden>
                        Select a Genre
                    </option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Science-Fiction">Science-Fiction</option>
                {
                    errors.genre ?
                    <span style={{color:"red"}}>{errors.genre.message}</span>
                    :null
                }
                </select>
            </div>
            <div>
                <label htmlFor = "description">Club Description: </label>
                <input onChange={newChangeHandler} name="description" type="text" value={club.description} />
                {
                    errors.description ?
                    <span style={{color:"red"}}>{errors.description.message}</span>
                    :null
                }
            </div>
            <div>
                <label htmlFor = "zoomLink">Zoom Link: </label>
                <input onChange={newChangeHandler} name="zoomLink" type="text" value={club.zoomLink} />
                {
                    errors.zoomLink ?
                    <span style={{color:"red"}}>{errors.zoomLink.message}</span>
                    :null
                }
            </div>
            <button>{buttonText}</button>
        </form>
    )
}

export default Form;