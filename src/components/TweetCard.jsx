import {
  Card,
  Group,
  Avatar,
  Text,
  ActionIcon,
  Menu,
  Stack,
} from "@mantine/core";
import {
  IconHeart,
  IconMessageCircle,
  IconRepeat,
  IconDots,
  IconHeartFilled,
  IconEye,
} from "@tabler/icons-react";

function TweetCard({ tweet, onLike }) {
  return (
    <Card style={{ backgroundColor: "#000", color: "white" }} withBorder>
      <Group>
        <Avatar src={tweet.user.avatar} radius="xl" size="md" />
        <div style={{ flex: 1 }}>
          <Group position="apart">
            <Group spacing="xs">
              <Text weight={500}>{tweet.user.name}</Text>
              <Text c="dimmed">{tweet.user.handle}</Text>
              <Text c="dimmed">· {tweet.time}</Text>
            </Group>
            <Menu>
              <Menu.Target style={{ backgroundColor: "#000", color: "white" }}>
                <ActionIcon aria-label="More options">
                  <IconDots size={18} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown style={{ backgroundColor: "#000" }}>
                <Menu.Item color="white">Copy link to Tweet</Menu.Item>
                <Menu.Item color="red">Delete Tweet</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          <Text mt="xs">{tweet.content}</Text>
          <Group spacing="lg" mt="sm">
            <ActionIcon color="gray" variant="subtle">
              <IconMessageCircle size={18} />
              <Text ml={4} size="sm">
                {tweet.replies}
              </Text>
            </ActionIcon>
            <ActionIcon color="gray" variant="subtle">
              <IconRepeat size={18} />
              <Text ml={4} size="sm">
                {tweet.retweets}
              </Text>
            </ActionIcon>
            <ActionIcon
              color={tweet.isLiked ? "red" : "gray"}
              variant="subtle"
              onClick={() => onLike(tweet.id)}
            >
              {tweet.isLiked ? (
                <IconHeartFilled size={18} />
              ) : (
                <IconHeart size={18} />
              )}
              <Text ml={4} size="sm">
                {tweet.likes}
              </Text>
            </ActionIcon>
            <ActionIcon color="gray" variant="subtle">
              <IconEye size={18} />
              <Text ml={4} size="sm">
                {tweet.views}
              </Text>
            </ActionIcon>
          </Group>
        </div>
      </Group>
    </Card>
  );
}

export default TweetCard;
