import { useState } from "react";
import { Container } from "@mantine/core";
import TooltipNavbar from "../components/TooltipNavbar";
import TweetComposer from "../components/TweetComposer";
import TweetFeed from "../components/TweetFeed";

function Tweet() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        handle: "@johndoe",
        avatar: "https://avatars.githubusercontent.com/u/1",
      },
      content: "Just learned Mantine UI, and it's awesome! 🚀",
      likes: 42,
      isLiked: false,
      retweets: 7,
      isRetweeted: false,
      replies: 3,
      time: "2h",
      views: 123,
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        handle: "@janesmith",
        avatar: "https://avatars.githubusercontent.com/u/2",
      },
      content: "Exploring the world of React and Mantine. Loving it so far! 💻",
      likes: 23,
      isLiked: false,
      retweets: 4,
      isRetweeted: false,
      replies: 1,
      time: "3h",
      views: 456,
    },
  ]);

  const handleTweet = (tweetText) => {
    const newTweet = {
      id: tweets.length + 1,
      user: {
        name: "John Doe",
        handle: "@johndoe",
        avatar: "https://avatars.githubusercontent.com/u/1",
      },
      content: tweetText,
      likes: 0,
      isLiked: false,
      retweets: 0,
      isRetweeted: false,
      replies: 0,
      time: "now",
      views: 0,
    };

    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (tweetId) => {
    setTweets(
      tweets.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1,
            isLiked: !tweet.isLiked,
          };
        }
        return tweet;
      })
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
      }}
    >
      <Container
        sx={{
          maxWidth: "800px",
          padding: "0 20px",
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <TooltipNavbar />
        <div style={{ width: "100%", maxWidth: "600px", margin: "20px auto" }}>
          <TweetComposer
            tweet={{
              user: {
                name: "John Doe",
                handle: "@johndoe",
                avatar: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
              },
              content: "",
              likes: 0,
              isLiked: false,
              retweets: 0,
              isRetweeted: false,
              replies: 0,
              time: "now",
              views: 0,
            }}
            onTweet={handleTweet}
          />
          <TweetFeed tweets={tweets} onLike={handleLike} />
        </div>
      </Container>
    </div>
  );
}

export default Tweet;
