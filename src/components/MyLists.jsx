import React, { useState } from 'react';
import FormList from './FormList';

export default function MyLists({ myLists, user }) {
  const [Mycards, setMyCards] = useState(myLists || []);
  return (
    <div>
      {Mycards?.map((el) => (
        <FormList
          key={el.id}
          el={el}
          user={user}
        />
      ))}
    </div>
  );
}
