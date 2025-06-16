import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        "Discover Ideas, Insights, and Inspiration—
        <span>One Blog at a Time.</span>"
      </h1>
      <p>
        Explore well-crafted articles on tech, design, productivity, and
        everything in between. Whether you're here to learn something new or
        simply get inspired, our blog is your daily dose of thoughtful content.
      </p>
      <button className="btn">
        <Link to={"/register"}>Explore More</Link>
      </button>
    </div>
  );
};

export default Home;
