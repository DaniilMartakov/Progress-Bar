import React, { useEffect } from 'react';
import AddUser from './AddUser';
import OneUser from './OneUser';

export default function AllUser({ allUser, setAllUser }) {
  useEffect(() => {
    fetch('/api/v1/users')
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <>
      <div>
        {allUser?.map((el) => <OneUser key={el.id} user={el} />)}
      </div>
      <div>
        <AddUser setAllUser={setAllUser} />
      </div>
    </>
  );
}
