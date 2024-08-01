import json
import os
import markdown

# Define the paths
json_file_path = 'src/components/assets/blogPosts.json'
markdown_file_path = 'blogs-to-be/posts.md'


# Read the markdown file
def read_markdown_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()


# Convert markdown to a blog post object
def convert_markdown_to_blog_post(markdown_content):
    lines = markdown_content.split('\n')
    blog_post = {
        "id": lines[0].replace('ID: ', '').strip(),
        "title": lines[1].replace('Title: ', '').strip(),
        "author": lines[2].replace('Author: ', '').strip(),
        "date": lines[3].replace('Date: ', '').strip(),
        "image": lines[4].replace('Image: ', '').strip(),
        "content": markdown.markdown('\n'.join(lines[6:]).strip()),
    }
    return blog_post


# Append the new blog post to the JSON file
def append_blog_post_to_json(blog_post, json_file_path):
    if os.path.exists(json_file_path):
        with open(json_file_path, 'r') as file:
            try:
                blog_posts = json.load(file)
            except json.JSONDecodeError:
                blog_posts = []
    else:
        blog_posts = []

    blog_posts.append(blog_post)

    with open(json_file_path, 'w') as file:
        json.dump(blog_posts, file, indent=2)


def main():
    markdown_content = read_markdown_file(markdown_file_path)
    blog_post = convert_markdown_to_blog_post(markdown_content)
    append_blog_post_to_json(blog_post, json_file_path)


if __name__ == '__main__':
    main()
