import React from "react";
import Banner from "./Banner";
import Headers from "../components/Header/Header";
import Tags from "./Tags";

function Home() {
  return (
    <div className="home">
      <Headers />
      <Banner />
      <Tags />
    </div>
  );
}
export default Home;
