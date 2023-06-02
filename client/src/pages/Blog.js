import React from "react";
import Post from "../components/Post";
import Contact from "../components/Contact";

function Blog() {
  const postObj = [
    {
      title: "First Vlog",
      description: "This is the description of the first vlog post.",
      url: "www.youtube.com",
      postedOn: "01-01-2023",
    },
    {
      title: "Second Vlog",
      description: "This is the description of the second vlog post.",
      url: "www.youtube.com",
      postedOn: "02-02-2023",
    },
    {
      title: "Third Vlog",
      description: "This is the description of the third vlog post.",
      url: "www.youtube.com",
      postedOn: "03-03-2023",
    },
  ];

  return (
    <section>
      <div className="opaqueBg">
        <div className="categories row justify-content-around">
          <div className="col-6 row justify-content-between align-items-center">
            <i className="col-3 text-end fa-solid fa-magnifying-glass"></i>
            <input className="col-9" placeholder="Search..."></input>
          </div>
          <select className="col-4">
            <option>Filter</option>
            <optgroup label="Categories">
              <option value="raccoon">Raccoons</option>
              <option value="refurbish">Refurbishing</option>
            </optgroup>
            <optgroup label="Years">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </optgroup>
          </select>
        </div>
      </div>
      <main>
        {postObj.map((post) => (
          <Post
            title={post.title}
            description={post.description}
            url={post.url}
            postedOn={post.postedOn}
          ></Post>
        ))}
      </main>
      <Contact></Contact>
    </section>
  );
}

export default Blog;
