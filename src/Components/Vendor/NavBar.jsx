import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { connect } from "react-redux";
import { logout } from "../../Redux/Auth/actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBtn: {
    marginRight: "20px",
    "&:hover": {
      color: "black",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { logout } = props;
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton color="inherit" className={classes.navBtn}>
              <ListAltIcon className={classes.link} />
              <Link to="/vendor" className={classes.link}>
                Orders
              </Link>
            </IconButton>
          </div>
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            className={classes.navBtn}
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: (payload) => dispatch(logout(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
