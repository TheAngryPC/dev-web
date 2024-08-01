// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import BlogPost from "./components/BlogPost";
import {
  fetchBlogPosts,
  BlogPost as BlogPostType,
} from "./utils/fetchBlogPosts";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const blogPosts = fetchBlogPosts();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {blogPosts.map((post: BlogPostType) => (
          <Route
            key={post.id}
            path={`/blog/${post.id}`}
            element={
              <BlogPost
                title={post.title}
                author={post.author}
                date={post.date}
                content={post.content}
                image={post.image}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
