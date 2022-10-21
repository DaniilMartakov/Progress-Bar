import React, { useEffect } from 'react';
import AddUser from './AddUser';
import OneUser from './OneUser';

export default function AllUser({ allUser, setAllUser, setUser }) {
  useEffect(() => {
    fetch('/api/v1/users')
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
        <AddUser setAllUser={setAllUser} />
      </div>
      <div>
        {allUser?.map((el) => <OneUser key={el.id} user={el} />)}
      </div>
    </>
  );
}
