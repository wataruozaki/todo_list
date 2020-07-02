import React, { useReducer } from "react";

import reducer from "../reducers/events";
import { Paper, makeStyles } from "@material-ui/core";
import Form from "./Form";
import EventTable from "./EventTable";

import AppContext from "../context/AppContext";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "350px",
    margin: "50px auto",
    padding: "50px",
    textAlign: "center",
  },
}));

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const classes = useStyles();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Paper className={classes.paper}>
        <Form />
        <EventTable />
      </Paper>
    </AppContext.Provider>
  );
}

export default App;
