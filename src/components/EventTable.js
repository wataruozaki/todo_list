import React from "react";
import Event from "./Event";

import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  table: {
    maxWidth: "500px",
  },
}));

function EventTable({ state, dispatch }) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventTable;
