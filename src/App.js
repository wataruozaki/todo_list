import React, { useState, useReducer } from "react";
import Event from "./Event";
import reducer from "./reducers/events";
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
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const classes = useStyles();

  const addEvent = (e) => {
    e.preventDefault();
    console.log(title, body);
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    console.log("delete");
  };

  return (
    <form>
      <Paper className={classes.paper}>
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
        </Grid>
      </Paper>
    </form>
  );
}

export default App;
