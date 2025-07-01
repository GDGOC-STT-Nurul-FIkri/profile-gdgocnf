const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

// __dirname adalah folder scripts, kita naik satu folder ke root project
const postsDir = path.join(__dirname, "..", "public", "content", "posts");

const files = fs.readdirSync(postsDir);

const posts = files
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      ...data,
      content,
    };
  });

fs.writeFileSync(
  path.join(__dirname, "..", "public", "content", "posts.json"),
  JSON.stringify(posts, null, 2)
);
