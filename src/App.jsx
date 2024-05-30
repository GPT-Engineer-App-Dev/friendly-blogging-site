import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";
import { useState, useEffect } from "react";
import { ColorModeScript, useColorMode } from "@chakra-ui/react";
import { Box, Switch } from "@chakra-ui/react";

function App() {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      const newPosts = posts.filter((_, i) => i !== index);
      setPosts(newPosts);
    }
  };

  useEffect(() => {
    const savedColorMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedColorMode && savedColorMode !== colorMode) {
      toggleColorMode();
    }
  }, []);

  const handleToggle = () => {
    toggleColorMode();
    localStorage.setItem("chakra-ui-color-mode", colorMode === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <ColorModeScript initialColorMode={colorMode} />
      <Box position="fixed" top="1rem" right="1rem">
        <Switch isChecked={colorMode === "dark"} onChange={handleToggle} />
      </Box>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
        <Route path="/new-post" element={<NewPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;