import { useState } from "react";
import {
  Paper,
  Avatar,
  Button,
  Stack,
  Group,
  Text,
  ActionIcon,
  Card,
  Menu,
  Modal,
  Textarea,
  Container,
} from "@mantine/core";
import {
  IconHeart,
  IconMessageCircle,
  IconRepeat,
  IconShare,
  IconDots,
  IconPhoto,
  IconMoodSmile,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";
import { TooltipNavbar } from "./components/TooltipNavbar";

function Tweet() {
  const [tweetText, setTweetText] = useState("");
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
    },
    // Add more tweets as needed
  ]);
  const [replyModal, setReplyModal] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState(null);

  const handleTweet = () => {
    if (!tweetText.trim()) return;

    const newTweet = {
      id: tweets.length + 1,
      user: {
        name: "Current User",
        handle: "@currentuser",
        avatar: "https://avatars.githubusercontent.com/u/1",
      },
      content: tweetText,
      likes: 0,
      isLiked: false,
      retweets: 0,
      isRetweeted: false,
      replies: 0,
      time: "now",
    };

    setTweets([newTweet, ...tweets]);
    setTweetText("");
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

  const handleRetweet = (tweetId) => {
    setTweets(
      tweets.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            retweets: tweet.isRetweeted
              ? tweet.retweets - 1
              : tweet.retweets + 1,
            isRetweeted: !tweet.isRetweeted,
          };
        }
        return tweet;
      })
    );
  };

  const handleReply = (tweet) => {
    setSelectedTweet(tweet);
    setReplyModal(true);
  };

  return (
    <Container
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%",
        margin: 0,
        maxHeight: "100vh",
      }}
    >
      <Container
        style={{
          maxWidth: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "row",
        }}
      >
        <TooltipNavbar />
        <div style={{ maxWidth: 600, margin: "20px auto" }}>
          {/* Tweet Composer */}
          <Paper p="md" withBorder mb="md">
            <Group align="flex-start" spacing="sm">
              <Avatar
                src="https://avatars.githubusercontent.com/u/1"
                radius="xl"
                size="md"
              />
              <Stack style={{ flex: 1 }} spacing="xs">
                <Textarea
                  placeholder="What's happening?"
                  variant="unstyled"
                  value={tweetText}
                  onChange={(event) => setTweetText(event.currentTarget.value)}
                  autosize
                  minRows={2}
                  maxRows={4}
                />
                <Group position="apart">
                  <Group spacing="xs">
                    <ActionIcon
                      color="blue"
                      variant="subtle"
                      aria-label="Add photo"
                    >
                      <IconPhoto size={20} />
                    </ActionIcon>
                    <ActionIcon
                      color="blue"
                      variant="subtle"
                      aria-label="Add emoji"
                    >
                      <IconMoodSmile size={20} />
                    </ActionIcon>
                    <ActionIcon
                      color="blue"
                      variant="subtle"
                      aria-label="Add event"
                    >
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

          {/* Tweet Feed */}
          <Stack spacing="md">
            {tweets.map((tweet) => (
              <Card key={tweet.id} withBorder p="md">
                <Group>
                  <Avatar src={tweet.user.avatar} radius="xl" size="md" />
                  <div style={{ flex: 1 }}>
                    <Group position="apart">
                      <Group spacing="xs">
                        <Text weight={500}>{tweet.user.name}</Text>
                        <Text color="dimmed">{tweet.user.handle}</Text>
                        <Text color="dimmed">· {tweet.time}</Text>
                      </Group>
                      <Menu>
                        <Menu.Target>
                          <ActionIcon aria-label="More options">
                            <IconDots size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item>Copy link to Tweet</Menu.Item>
                          <Menu.Item color="red">Delete Tweet</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Group>
                    <Text mt="xs">{tweet.content}</Text>

                    {/* Tweet Actions */}
                    <Group spacing={30} mt="md">
                      <ActionIcon
                        variant="subtle"
                        color="blue"
                        size="md"
                        radius="xl"
                        onClick={() => handleReply(tweet)}
                        aria-label="Reply"
                      >
                        <Group spacing={4}>
                          <IconMessageCircle size={18} />
                          <Text size="sm" color="dimmed">
                            {tweet.replies}
                          </Text>
                        </Group>
                      </ActionIcon>

                      <ActionIcon
                        variant="subtle"
                        color={tweet.isRetweeted ? "green" : "gray"}
                        size="md"
                        radius="xl"
                        onClick={() => handleRetweet(tweet.id)}
                        aria-label="Retweet"
                      >
                        <Group spacing={4}>
                          <IconRepeat size={18} />
                          <Text size="sm" color="dimmed">
                            {tweet.retweets}
                          </Text>
                        </Group>
                      </ActionIcon>

                      <ActionIcon
                        variant="subtle"
                        color={tweet.isLiked ? "red" : "gray"}
                        size="md"
                        radius="xl"
                        onClick={() => handleLike(tweet.id)}
                        aria-label="Like"
                      >
                        <Group spacing={4}>
                          <IconHeart size={18} />
                          <Text size="sm" color="dimmed">
                            {tweet.likes}
                          </Text>
                        </Group>
                      </ActionIcon>

                      <ActionIcon
                        variant="subtle"
                        color="gray"
                        size="md"
                        radius="xl"
                        aria-label="Share"
                      >
                        <IconShare size={18} />
                      </ActionIcon>
                    </Group>
                  </div>
                </Group>
              </Card>
            ))}
          </Stack>

          {/* Reply Modal */}
          <Modal
            opened={replyModal}
            onClose={() => setReplyModal(false)}
            title="Reply to Tweet"
          >
            {selectedTweet && (
              <Stack>
                <Group>
                  <Avatar
                    src={selectedTweet.user.avatar}
                    radius="xl"
                    size="sm"
                  />
                  <Text size="sm" weight={500}>
                    {selectedTweet.user.name}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {selectedTweet.user.handle}
                  </Text>
                </Group>
                <Text size="sm">{selectedTweet.content}</Text>
                <Textarea
                  placeholder="Tweet your reply"
                  autosize
                  minRows={2}
                  maxRows={4}
                />
                <Group position="right">
                  <Button radius="xl" onClick={() => setReplyModal(false)}>
                    Reply
                  </Button>
                </Group>
              </Stack>
            )}
          </Modal>
        </div>
      </Container>
    </Container>
  );
}

export default Tweet;
