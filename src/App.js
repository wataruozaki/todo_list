import React, { useState, useReducer } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
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
function App() {
  const classes = useStyles();
  return (
    <form>
      <Paper className={classes.paper}>
        <h1>Todo List</h1>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField className={classes.textField} helperText="title" />
          </Grid>
          <Grid item xs={8}>
            <TextField className={classes.textField} helperText="body" />
          </Grid>
          <Grid item xs={6}>
            <Button className={classes.button} variant="contained">
              Add
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button className={classes.button} variant="contained">
              All Delete
            </Button>
          </Grid>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </form>
  );
}

export default App;
