import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: "30px",
  },
}));

const Title = (props) => {
  const classes = useStyles();
  return <Paper className={classes.title}>{props.title}</Paper>;
};

export default Title;
