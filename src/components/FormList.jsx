import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FormList({ el, user }) {
  const [add, setAdd] = useState(false);
  const clickHandler = () => setAdd(!add);
  // const [per, setPer] = useState(0);
  const { id } = useParams();
  let a = 0;
  const per = Object.values(JSON.parse(JSON.stringify(el)));
  per.map((e) => {
    if (e === true) {
      a += 1;
    }
  });
  const b = ((a / 11) * 100).toFixed();

  return (
      <div className="card">
        <h5 onClick={clickHandler} className="card-header">{el.name}</h5>
        {add && (
        <div className="card-body">
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text">{el.team}</p>
          <p className="card-text">{el.coach}</p>
          <p className="card-text">
            {b}
            %
          </p>
          {user && user?.id === el.user_id && (
          <Link to={`/one_shablon/${el.id}`} className="btn btn-outline-info">Shablon</Link>
          )}
        </div>
        )}
      </div>
  );
}
