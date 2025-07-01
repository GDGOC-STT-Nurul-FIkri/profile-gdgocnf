# 📘 Profile GDGOC STT NF

A simple blog app built with **React**, supporting **Markdown (.md) articles** with `gray-matter` frontmatter metadata, enhanced with:
- Formatted article view
- Share button
- Like button
- Fetches posts from local JSON + Markdown content

## 📦 Features

- 📄 Parses `.md` files with YAML frontmatter (`gray-matter`)
- 🖼 Renders Markdown content with `react-markdown`
- 💬 Displays metadata (title, date, tags, author, etc.)
- ❤️ Like button (client-side toggle)
- 🔗 Share button (via Web Share API or clipboard fallback)
- 🚀 Responsive & styled with Tailwind CSS

---

## 🛠 Project Structure
```
├── public/
│ └── content/
│ ├── posts/
│ │ ├── kegiatan.md
│ │ └── ...
│ └── posts.json
├── src/
│ ├── pages/
│ │ └── PostDetail.tsx
│ ├── utils/
│ │ └── markdown.ts
│ ├── global.d.ts
│ ├── App.tsx
│ └── main.tsx
```


---

## 🧠 How It Works

### 🧾 Markdown File with Frontmatter

Each post is written in Markdown with YAML frontmatter, e.g.:

```md
---
title: "Kegiatan Rutin GDGOC STT Nurul Fikri"
date: "2023-11-20"
author: "Media Team"
description: "Mengenal berbagai kegiatan menarik yang rutin diadakan oleh GDGOC STT Nurul Fikri"
tags: ["kegiatan", "event", "community"]
---

Isi artikel dimulai dari sini...
```

> A quick reference to the Markdown syntax.
[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## 🧩 Installation
# 1. Clone repository
```
git clone https://github.com/yudhriz/profile-gdgocnf.git
cd profile-gdgocnf
```

# 2. Install dependencies
```bash
npm install
```

# 3. Run development server
```bash
npm run dev
```

## 🧰 Dependencies
- react-markdown
- gray-matter
- lucide-react
- buffer (for gray-matter on browser)

## 📝 License
MIT License © 2025 GDGOC STT Nurul Fikri
