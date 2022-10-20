import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllLists from './AllLists';
import HomePage from './HomePage';
import LogIn from './Login';
import MyLists from './MyLists';
import Navbar from './NavBar';
import Inputs from './Inputs';
import Shablone from './shablone';
import AllUser from './AllUsers';

function App({
  user: currentUser, logo, name, message, allUser: allUsersArray, allLists, myLists,
}) {
  const [cards, setCards] = useState(allLists || []);
  const [Mycards, setMyCards] = useState(myLists || []);
  const [allUser, setAllUser] = useState(allUsersArray || null);
  const [user, setUser] = useState(currentUser || null);
  const [inputs, setInputs] = useState({});
  return (
    <div className="container">
      {user ? (<Navbar user={user} allUser={allUser} setAllUser={setAllUser} setUser={setUser} logo={logo} name={name} message={message} />) : (
        <>
          <h4 className="message">Привет! Это корпоративный портал ООО “Высокая Гора”.</h4>
          {' '}
          <h4>Чтобы получить доступ к сайту - обратись в департамент HR.</h4>
        </>
      )}
      <div className="">
        <Routes>
          <Route path="/" element={<LogIn setUser={setUser} />} />
          <Route path="/new" element={<Inputs setInputs={setInputs} />} />
          <Route path="/shablone" element={<Shablone inputs={inputs} />} />
          <Route path="/homepage" element={<HomePage setUser={setUser} message={message} />} />
          <Route path="/logIn" element={<LogIn setUser={setUser} />} />
          <Route path="/list/all" element={<AllLists setCards={setCards} cards={cards} user={user} />} />
          <Route path="/list/my/:id" element={<MyLists setMyCards={setMyCards} Mycards={Mycards} user={user} />} />
          <Route path="/users" element={<AllUser setAllUser={setAllUser} allUser={allUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
