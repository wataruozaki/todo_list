import React, { useReducer } from "react";

import reducer from "../reducers/events";
import { Paper, makeStyles } from "@material-ui/core";
import Form from "./Form";
import EventTable from "./EventTable";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "50px",
    textAlign: "center",
  },
}));

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Form dispatch={dispatch} />
      <EventTable state={state} dispatch={dispatch} />
    </Paper>
  );
}

export default App;
