import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Edit from './Edit';
// import Entries from './Entries';
// import Header from './Header';
import HomePage from './HomePage';
import LogIn from './Login';
import Navbar from './NavBar';
// import New from './New';
// import PrivateRoute from './PrivateRoute';
import Registration from './Registration';
// import Show from './Show';

function App({
  entries, entry, user: currentUser, logo, name, message,
}) {
  const [user, setUser] = useState(currentUser || null);
  return (
    <div className="container">
      {user ? (<Navbar user={user} setUser={setUser} logo={logo} name={name} message={message} />) : <><h4 className="message">Привет! Это корпоративный портал ООО “Высокая Гора”.</h4> <h4>Чтобы получить доступ к сайту - обратись в департамент HR.</h4></>}
      {/* <Header user={user} setUser={setUser} /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<LogIn setUser={setUser} />} />
          <Route path="/homepage" element={<HomePage setUser={setUser} message={message} />} />
          <Route path="/signUp" element={<Registration setUser={setUser} />} />
          {/* <Route path="/" element={<Entries user={user} entries={entries} />} /> */}
          {/* {/* <Route path="entries/:id" element={<PrivateRoute user={user}><Show user={user} entry={entry} /></PrivateRoute>} /> */}
          {/* <Route path="entries/new" element={<PrivateRoute user={user}><New /></PrivateRoute>} /> */}
          {/* <Route path="entries/:id/edit" element={<PrivateRoute user={user}><Edit entry={entry} /></PrivateRoute>} /> */} */
        </Routes>
      </div>
    </div>
  );
}

export default App;
