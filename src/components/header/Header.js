import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func
};

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "0 10%",
    boxShadow: "none"
  }
};
function Header(props) {
  const { classes, user } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar classes={{ root: classes.root }}>
          <Toolbar>
            {user.loggedIn && (
              <div className="header-container">
                <div className="header-title">Conduit</div>
                <div className="header-right">
                  <div className="header-home">
                    <NavLink to="/" exact activeClassName="selected">
                      Home
                    </NavLink>
                  </div>
                  <div className="header-Article">
                    <NavLink to="/login" activeClassName="selected">
                      New Article
                    </NavLink>
                  </div>
                  <div className="header-Settings">
                    <i className="material-icons"> settings </i>
                    Settings
                  </div>
                  <div className="header-inforUser">
                    <img src={user.user.user.image} alt="" />
                    {user.user.user.username}
                  </div>
                </div>
              </div>
            )}
            {!user.loggedIn && (
              <div className="header-container">
                <div className="header-title">Conduit</div>
                <div className="header-right">
                  <div className="header-home">
                    <NavLink to="/" exact activeClassName="selected">
                      Home
                    </NavLink>
                  </div>
                  <div className="header-Article">
                    <NavLink to="/login" activeClassName="selected">
                      Sign In
                    </NavLink>
                  </div>
                  <div className="header-Settings">
                    <NavLink to="/register" activeClassName="selected">
                      Sign Up
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

function mapStateToProps(state) {  
  return {
    user: state.auth
  };
}
export default connect(mapStateToProps)(withStyles(styles)(Header));
