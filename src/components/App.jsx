import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllLists from './AllLists';
import HomePage from './HomePage';
import LogIn from './Login';
import MyLists from './MyLists';
import Navbar from './NavBar';
import PrivateRoute from './PrivateRoute';
import Registration from './Registration';
import Show from './Show';

function App({
  user: currentUser, logo, name, message, allLists, myLists,
}) {
  const a = ['q1', 'q2'];
  const [user, setUser] = useState(currentUser || null);
  // for (const key in allCats) {
  // console.log(allCats);
  // }

  // console.log(Object.values(allCats).map((e) => {
  //   if (e == true) { return 1; }
  // }));

  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} logo={logo} name={name} message={message} />
      {/* <Header user={user} setUser={setUser} /> */}
      <div className="">
        <Routes>
          <Route path="/homepage" element={<HomePage setUser={setUser} message={message} />} />
          <Route path="/logIn" element={<LogIn setUser={setUser} />} />
          <Route path="/signUp" element={<Registration setUser={setUser} />} />
          <Route path="entries/:id" element={<PrivateRoute user={user}><Show user={user} /></PrivateRoute>} />
          <Route path="/list/all" element={<AllLists allLists={allLists} user={user} />} />
          <Route path="/list/my/:id" element={<MyLists myLists={myLists} user={user}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
