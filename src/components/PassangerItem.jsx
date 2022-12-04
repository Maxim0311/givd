import React from 'react';

export default function PassangerItem({ _id, name, trips }) {
  return (
    <div>
      <div>id: {_id}</div>
      <div>name: {name}</div>
      <div>id: {trips}</div>
    </div>
  );
}
