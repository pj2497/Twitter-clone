import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const setTweet = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      userName: "EFGH",
      displayName: "Efgh",
      verified: true,
      image: tweetImage,
      avatar: "https://images.indianexpress.com/2020/04/FIFA-20-1200.jpg",
      text: tweetMessage,
    });

    setTweetMessage("");
    setTweetImage([]);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar alt="Pranav" />
          <input
            value={tweetMessage}
            onChange={(event) => setTweetMessage(event.target.value)}
            placeholder="Whats happening ? "
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(event) => setTweetImage(event.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={setTweet} className="tweetBox_tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
