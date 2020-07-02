import React from "react";

import Event from "./Event";

import {
  makeStyles,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "50px",
    textAlign: "center",
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  table: {
    maxWidth: "500px",
  },
}));

function TextTable() {
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
          <Event />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TextTable;
