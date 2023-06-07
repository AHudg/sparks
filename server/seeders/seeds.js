// import postSeeds from "./postSeed.json" assert { type: "json" };
import db from "../config/connection.js";
import { Post } from "../models/Post.js";

db.once("open", async () => {
  try {
    await Post.deleteMany({});

    await Post.insertMany([
      {
        title: "Raccoons Visit!!",
        description:
          "Some late night munchies were enjoyed by this trio of snackers!",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "3:30",
        tags: ["raccoon", "2023", "funny"],
      },
      {
        title: "1950s Re-Upholsted Chair",
        description:
          "Learn how to restore this chair that has seen so much love.",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "4:20",
        tags: ["upholster", "2022", "hobby"],
      },
      {
        title: "Do Something For Yourself",
        description:
          "Today I'd like to elaborate on how important it is to find time everyday to do something small for yourself.",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "2:15",
        tags: ["inspiration", "2023"],
      },
      {
        title: "Mulching 101",
        description:
          "Grab your notepads! Today we are tackling when, where, how, and why to mulch!",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "4:30",
        tags: ["garden", "2021", "hobby"],
      },
      {
        title: "Daily Dose of Love",
        description: "Just a quick message to say spread your light today!",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "1:55",
        tags: ["inspiration", "2022"],
      },
      {
        title: "New Workout!!",
        description:
          "Here is the 411 on this new workout I've started with my trainer and the results I'm seeing. Check! This! Out!",
        thumbnail: "www.thumbnail.com",
        url: "www.url.com",
        length: "2:52",
        tags: ["exercise", "2021", "hobby", "inspiration"],
      },
    ]);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Seeded successfully.");
  process.exit(0);
});
