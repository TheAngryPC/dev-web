// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import Contact from "./Contact";
import BlogPost from "./components/BlogPost";
import {
  fetchBlogPosts,
  BlogPost as BlogPostType,
} from "./utils/fetchBlogPosts";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./Calendar";

const App: React.FC = () => {
  const blogPosts = fetchBlogPosts();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/Students" element={<Students />} />
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
