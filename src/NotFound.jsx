import { Button, Container, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const styles = {
    container: {
      backgroundColor: "#000",
      color: "white",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
    },
    logo: {
      width: "100px",
      marginBottom: "20px",
    },
    button: {
      marginTop: "20px",
    },
  };

  return (
    <Container fluid style={styles.container}>
      <img src="/x.jpg" alt="X Logo" style={styles.logo} />
      <Title order={1}>Hmm... this page doesn’t exist.</Title>
      <Text size="md" mt="sm" c="gray">
        Try searching for something else.
      </Text>
      <Button
        style={styles.button}
        color="blue"
        radius="md"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Container>
  );
}
