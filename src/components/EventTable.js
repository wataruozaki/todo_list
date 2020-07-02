import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../context/AppContext";

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

function EventTable() {
  const { state } = useContext(AppContext);
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
            <Event key={index} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventTable;
