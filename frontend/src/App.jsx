import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  // Set background color or gradient based on color mode
  const appBg = useColorModeValue(
    "linear(to-br, blue.100, purple.100)", // light mode
    "linear(to-br, gray.900, teal.900)" // dark mode
  );

  return (
    <Box minH={"100vh"} bgGradient={appBg}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
