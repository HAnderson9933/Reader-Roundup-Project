import React, {useState} from 'react';
import './App.css';
import {Router} from '@reach/router';
import Header from './componenets/Header';
import AllClubs from './componenets/AllClubs';
import NewClub from './componenets/NewClub';
import EditClub from './componenets/EditClub';
import OneClub from './componenets/OneClub';
import LogReg from './componenets/LogReg';
import Login from './componenets/Login';
import UserProfile from './componenets/UserProfile';

function App() {
  const [user, setUser] = useState({
    username: "",
    id: ""
  });
  const [reloadBoolean, setReloadBoolean] = useState(false);

  return (
    <div className="App">
      <Header setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean}/>
      <Router>
        <LogReg setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean} path="/" user={user} setUser={setUser}/>
        <Login setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean} path="/login"/>
        <AllClubs default  user={user} />
        <NewClub path ="/club/new"/>
        <UserProfile path="/user/profile/:id" user={user}/>
        <OneClub path ="/club/:id"/>
        <EditClub path ="/club/edit/:id"/> 
      </Router>
      
    </div>
  );
}

export default App;
