import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../Redux/Auth/actions";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "auto",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 750,
    margin: "auto",
    marginTop: "50px",
    maxHeight: "580px",
    overflow: "auto",
    border: "solid 1px cyan",
  },
  input: {
    margin: "20px",
  },
  title: {
    margin: "auto",
  },
});

const Login = (props) => {
  const classes = useStyles();
  const { loginUser } = props;
  const [userDetails, setDetails] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    setDetails({ ...userDetails, [event.target.name]: event.target.value });
    console.log(userDetails);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h4 className={classes.title}>LOGIN</h4>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          // value={userDetails.email}
          className={classes.input}
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          // value={userDetails.password}
          className={classes.input}
          name="password"
          onChange={handleChange}
        />
        <FormControl className={classes.input}>
          <InputLabel id="role">Role</InputLabel>
          <Select
            labelId="role"
            value={userDetails.role}
            name="role"
            onChange={handleChange}
          >
            <MenuItem value="employee">employee</MenuItem>
            <MenuItem value="vendor">vendor</MenuItem>
            <MenuItem value="admin">admin</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          className={classes.input}
          onClick={() => {
            loginUser(userDetails);
          }}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => dispatch(loginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
