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
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Settings from "@material-ui/icons/Settings";
import Launch from "@material-ui/icons/Launch";
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
                  <NavLink to="/" exact activeClassName="selected">
                    <div className="header-home">HOME</div>
                  </NavLink>
                  <NavLink to="/editor" activeClassName="selected">
                    <div className="header-item">
                      <Launch />
                      New Article
                    </div>
                  </NavLink>
                  <NavLink to="/login" activeClassName="selected">
                    <div className="header-item">
                      <Settings />
                      Settings
                    </div>
                  </NavLink>
                  <div className="header-item">
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
                  <NavLink to="/" exact activeClassName="selected">
                    <div className="header-home">HOME</div>
                  </NavLink>
                  <NavLink to="/login" activeClassName="selected">
                    <div className="header-item">
                      <Fingerprint />
                      LOGIN
                    </div>
                  </NavLink>
                  <NavLink to="/register" activeClassName="selected">
                    <div className="header-item">
                      <PersonAdd />
                      REGISTER
                    </div>
                  </NavLink>
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
