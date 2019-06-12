import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import Banner from "./Banner";
import Tags from "./Tags";
import List from "./List";
import "./style.css";

function Home(props) {
  const {auth} = props;
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (auth && auth.loggedIn) setIsAuth(true)
  },[auth.loggedIn])
  return (
    <div className="home">
      <Banner />
      <div className="flex">
        <List {...auth} isAuth={isAuth}/>
        <Tags />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {auth: state.auth}
}
export default connect(mapStateToProps, null)(Home);
