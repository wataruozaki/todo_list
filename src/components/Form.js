import React, { useState } from "react";

import { Grid, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <TextField
          className={classes.textField}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          helperText="title"
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.textField}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          helperText="body"
        />
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
    </Grid>
  );
}

export default Form;
