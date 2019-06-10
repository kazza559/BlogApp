import React from "react";
import Banner from "./Banner";
import Headers from "../components/header/Header";
import Tags from "./Tags";
import List from "./List";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <Headers />
      <Banner />
      <div className="flex">
        <List />
        <Tags />
      </div>
    </div>
  );
}
export default Home;
