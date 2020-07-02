import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
function Event() {
  // const id = event.id;
  const handleClickDeleteButton = (e) => {
    e.preventDefault();
  };
  return (
    <TableRow>
      <TableCell>{}</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
        <Button onClick={handleClickDeleteButton}>delete</Button>
      </TableCell>
    </TableRow>
  );
}

export default Event;
