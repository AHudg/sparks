import React, { useContext } from "react";
import ThemeContext from "../components/ThemeContext";
import "./Blog.css";
import Hero from "../components/Hero";
import Loading from "../components/Loading";

import Post from "../components/Post";
import { useQuery } from "@apollo/client";
import { QUERY_ALLPOST } from "../utils/queries";

import handFan from "../handFan.png";
import bgVideo from "../bubbles.mp4";

function Blog() {
  const optionObj = [
    {
      tagName: "raccoon",
      displayName: "Raccoons",
    },
    {
      tagName: "refurbish",
      displayName: "Refurbishing",
    },
    {
      tagName: "upholster",
      displayName: "Re-Upholsterin",
    },
    {
      tagName: "garden",
      displayName: "Gardening",
    },
    {
      tagName: "exercise",
      displayName: "Exercise",
    },
  ];

  const { theme } = useContext(ThemeContext);

  const { loading, error, data } = useQuery(QUERY_ALLPOST);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log("error: " + error.message);
  }

  return (
    <section>
      <Hero
        media="video"
        src={bgVideo}
        firstLine="MOST"
        secondLine="RECENT"
        orientation="ornamentHero"
        accentClass="hands"
        accent={handFan}
      />

      <div className={`mt-4 py-3 ${theme}OpaqueBg`}>
        <div className="row mx-3 justify-content-end align-items-center">
          <input className="col-10 searchBar" placeholder="Search..."></input>
          <i className="col-2 fa-solid fa-magnifying-glass searchEmblem"></i>
        </div>

        <div className="row mt-3 mx-3 justify-content-end">
          <span className="col-6">Filter Results:</span>
          <select className="col-6 filterBar">
            <option>None</option>
            <optgroup label="Categories">
              {optionObj.map((option) => (
                <option value={option.tagName}>{option.displayName}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      <main className="container">
        {data.allPost.map((post, i) => (
          <Post
            title={post.title}
            description={post.description}
            url={post.url}
            postedOn={post.postedOn}
            iterator={i}
          ></Post>
        ))}
      </main>
    </section>
  );
}

export default Blog;
