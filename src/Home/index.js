import React from "react";
import Banner from "./Banner";
import Headers from "../components/Header/Header";
import Tags from "./Tags";
import List from './List'

function Home() {
  return (
    <div className="home">
      <Headers />
      <Banner />
      <List />
      <Tags />
    </div>
  );
}
export default Home;
