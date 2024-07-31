// src/utils/fetchBlogPosts.ts
import blogPosts from "../components/assets/blogPosts.json";

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}

export const fetchBlogPosts = (): BlogPost[] => {
  return blogPosts as BlogPost[];
};
