import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Tweet from "./Tweet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import NotFound from "./NotFound";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Tweet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
