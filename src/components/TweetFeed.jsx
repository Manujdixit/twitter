import { Stack } from "@mantine/core";
import TweetCard from "./TweetCard";

function TweetFeed({ tweets, onLike }) {
  return (
    <Stack>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </Stack>
  );
}

export default TweetFeed;
