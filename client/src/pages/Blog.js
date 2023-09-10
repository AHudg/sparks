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
  const postObj = [
    {
      title: "First Vlog",
      description:
        "This is the description of the first vlog post. In our first post, we get to know one another and introduce you to the company, what we do here, and why we want to help you.",
      url: "www.youtube.com",
      postedOn: "01-01-2023",
      tags: ["raccoon", "2023"],
    },
    {
      title: "Second Vlog",
      description:
        "This is the description of the second vlog post. In the second blog, we fill this section with filler so that I can test the view more clickable interactions and debug. I needed something rather long to test.",
      url: "www.youtube.com",
      postedOn: "02-02-2021",
      tags: ["refurbish", "2021"],
    },
    {
      title: "Third Vlog",
      description:
        "This is the description of the third vlog post. In the third blog, we test a shorter description.",
      url: "www.youtube.com",
      postedOn: "03-03-2023",
      tags: ["upholster", "2023"],
    },
    {
      title: "Fourth Vlog",
      description:
        "This is the description of the fourth vlog post. In the fourth blog, I'm already tired of typing.",
      url: "www.youtube.com",
      postedOn: "01-01-2023",
      tags: ["garden", "2023"],
    },
    {
      title: "Fifth Vlog",
      description:
        "This is the description of the fifth vlog post. In the fifth blog, I decided to do another long blog post. I really enjoy all the interaction we are having on this website. I'm very proud. I need to continue full steam ahead on this project. And to make this a lengthy description.",
      url: "www.youtube.com",
      postedOn: "02-02-2023",
      tags: ["garden", "2023"],
    },
    {
      title: "Sixth Vlog",
      description: "This is the description of the sixth vlog post.",
      url: "www.youtube.com",
      postedOn: "03-03-2023",
      tags: ["refurbish", "upholster", "2023"],
    },
  ];

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

  console.log(data);

  return (
    <section>
      <Hero
        media="video"
        src={bgVideo}
        firstLine="MOST"
        secondLine="RECENT"
        accent={handFan}
      />

      <div className={`py-3 justify-content-center ${theme}OpaqueBg`}>
        <div className="col-6 row justify-content-between align-items-center">
          <i className="fa-solid fa-magnifying-glass searchEmblem"></i>
          <input
            className="col-9 col-md-10 searchBar"
            placeholder="Search..."
          ></input>
        </div>

        <div className="col-4">
          <span className="filterLabel">Filter:</span>
          <select className="filterBar">
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
