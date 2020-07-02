import React, { useState } from "react";
import * as actionTypes from "../actions/actionTypes";
import {
  FormControl,
  Grid,
  TextField,
  Button,
  makeStyles,
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
}));

function Form({ dispatch }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const classes = useStyles();

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.DELETE_ALL_EVENT });
  };
  return (
    <FormControl>
      <h1>Todo List</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            className={classes.textField}
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            className={classes.textField}
            label="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={addEvent}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={deleteAllEvents}
          >
            All Delete
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}

export default Form;
