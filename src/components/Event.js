import React, { useContext } from "react";
import * as actionTypes from "../actions/actionTypes";

import AppContext from "../context/AppContext";

import { TableCell, TableRow, Button } from "@material-ui/core";

function Event({ event }) {
  const { dispatch } = useContext(AppContext);
  const id = event.id;

  const deleteEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.DELETE_EVENT,
      id,
    });
  };

  return (
    <TableRow>
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{event.title}</TableCell>
      <TableCell align="right">{event.body}</TableCell>
      <TableCell>
        <Button onClick={deleteEvent} variant="contained">
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default Event;
