import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ row }) => {
  return (
    <td>
      {row.map(item => (
        <TableCell cell={item} />
      ))}
    </td>
  );
};

export default TableRow;
