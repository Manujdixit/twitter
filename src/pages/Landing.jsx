import {
  Button,
  Container,
  Divider,
  Grid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function XLogin() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  const logoSize = isXSmall
    ? "80px"
    : isSmall
    ? "120px"
    : isMedium
    ? "300px"
    : "600px";

  const styles = {
    Container: {
      backgroundColor: "#000000",
      color: "white",
      minHeight: "100vh",
      width: "100vw",
      maxWidth: "100%",
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    grid: {
      width: "100%",
      maxWidth: "1800px",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    logo: {
      width: logoSize,
    },
    content: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
    },
    title: {
      fontWeight: 700,
    },
    button: {
      width: "100%",
    },
    signInText: {
      cursor: "pointer",
    },
  };

  return (
    <Container style={styles.Container}>
      <Grid style={styles.grid}>
        <Grid.Col span={{ base: 12, md: 6 }} style={styles.logoContainer}>
          <div>
            <img src="/x.jpg" alt="X Logo" style={styles.logo} />
          </div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <div style={styles.content}>
            <Title align="center" order={1} style={styles.title}>
              Happening now
            </Title>
            <Text align="center" size="lg" weight={500}>
              Join today.
            </Text>

            <Button
              leftSection={<IconBrandGoogle size={18} />}
              style={styles.button}
              mt="lg"
              radius="md"
              variant="default"
              onClick={onClick}
            >
              Sign in with Google
            </Button>
            <Button
              leftSection={<Apple size={18} />}
              style={styles.button}
              mt="sm"
              radius="md"
              variant="default"
              onClick={onClick}
            >
              Sign up with Apple
            </Button>

            <Divider label="or" labelPosition="center" mt="md" />

            <Button
              style={styles.button}
              mt="sm"
              radius="md"
              color="blue"
              onClick={onClick}
            >
              Create account
            </Button>

            <Text align="center" size="xs" mt="sm" c="gray">
              By signing up, you agree to the Terms of Service and Privacy
              Policy.
            </Text>

            <Text align="center" size="sm" mt="md">
              Already have an account?{" "}
              <Text
                component="span"
                c="blue"
                weight={500}
                style={styles.signInText}
                onClick={onClick}
              >
                Sign in
              </Text>
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
