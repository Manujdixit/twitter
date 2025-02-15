import { useState } from "react";
import {
  Paper,
  Avatar,
  Button,
  Stack,
  Group,
  Textarea,
  ActionIcon,
} from "@mantine/core";
import {
  IconPhoto,
  IconMoodSmile,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";

function TweetComposer({ onTweet }) {
  const [tweetText, setTweetText] = useState("");

  const handleTweet = () => {
    if (!tweetText.trim()) return;
    onTweet(tweetText);
    setTweetText("");
  };

  return (
    <Paper
      p="md"
      withBorder
      mb="md"
      style={{ backgroundColor: "#000", color: "white" }}
    >
      <Group align="flex-start">
        <Avatar
          src="https://avatars.githubusercontent.com/u/1"
          radius="xl"
          size="md"
        />
        <Stack style={{ flex: 1 }}>
          <Textarea
            placeholder="What's happening?"
            variant="unstyled"
            value={tweetText}
            onChange={(event) => setTweetText(event.currentTarget.value)}
            autosize
            minRows={2}
            maxRows={4}
            styles={{
              input: {
                color: "white",
                "&::placeholder": {
                  color: "rgba(255, 255, 255, 0.5)",
                },
              },
            }}
            style={{ backgroundColor: "#000" }}
          />
          <Group position="apart">
            <Group spacing="xs">
              <ActionIcon color="blue" variant="subtle" aria-label="Add photo">
                <IconPhoto size={20} />
              </ActionIcon>
              <ActionIcon color="blue" variant="subtle" aria-label="Add emoji">
                <IconMoodSmile size={20} />
              </ActionIcon>
              <ActionIcon color="blue" variant="subtle" aria-label="Add event">
                <IconCalendar size={20} />
              </ActionIcon>
              <ActionIcon
                color="blue"
                variant="subtle"
                aria-label="Add location"
              >
                <IconMapPin size={20} />
              </ActionIcon>
            </Group>
            <Button
              radius="xl"
              onClick={handleTweet}
              disabled={!tweetText.trim()}
            >
              Tweet
            </Button>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
}

export default TweetComposer;
