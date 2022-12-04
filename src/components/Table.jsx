import React from 'react';
import TableRow from './TableRow';

const Table = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <TableRow row={item} />
      ))}
    </tr>
  );
};

export default Table;
