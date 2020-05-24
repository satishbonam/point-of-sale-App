import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import StorageIcon from "@material-ui/icons/Storage";
import ListAltIcon from "@material-ui/icons/ListAlt";

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

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" className={classes.navBtn}>
            <ShoppingCartIcon className={classes.link} />
            <Link to="/" className={classes.link}>
              POS
            </Link>
          </IconButton>

          <div>
            <IconButton color="inherit" className={classes.navBtn}>
              <BarChartIcon className={classes.link} />
              <Link to="/stats" className={classes.link}>
                Stats
              </Link>
            </IconButton>
            <IconButton color="inherit" className={classes.navBtn}>
              <StorageIcon className={classes.link} />
              <Link to="/stocks" className={classes.link}>
                Stocks
              </Link>
            </IconButton>
            <IconButton color="inherit" className={classes.navBtn}>
              <ListAltIcon className={classes.link} />
              <Link to="/order" className={classes.link}>
                Order Stock
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
