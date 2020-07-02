import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

import Form from "./Form";
import TextTable from "./TextTable";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "50px",
    textAlign: "center",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <form>
      <Paper className={classes.paper}>
        <h1>Todo List</h1>
        <Form />
        <TextTable />
      </Paper>
    </form>
  );
}

export default App;
