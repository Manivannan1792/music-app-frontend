import React from "react";
import { Link } from "react-router-dom";
import NewSongs from "./dashboard/NewSongs";
import Songs from "./dashboard/songs";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-auto flex items-center justify-center min-w-[680px]">
      <div className="w-full  flex-col bg-orange-100">
        <Header />
        <Songs />
      </div>
    </div>
  );
};

export default Home;
