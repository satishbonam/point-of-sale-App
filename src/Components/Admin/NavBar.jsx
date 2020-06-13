import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import StorageIcon from "@material-ui/icons/Storage";
import { connect } from "react-redux";
import { logout } from "../../Redux/Auth/actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBtn: {
    marginRight: "10px",
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
              <BarChartIcon className={classes.link} />
              <Link to="/admin" className={classes.link}>
                Stats
              </Link>
            </IconButton>
            <IconButton color="inherit" className={classes.navBtn}>
              <StorageIcon className={classes.link} />
              <Link to="/admin/stocks" className={classes.link}>
                Stocks
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
