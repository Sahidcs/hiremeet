
# HireMeet 👩‍💻👨‍💻 – AI-Powered Coding Interview Platform

HireMeet is a web-based platform designed for conducting live coding interviews. It allows users to solve real LeetCode and Codeforces problems with a built-in code editor, language selector, and interview scheduling capabilities.

## 🚀 Features

- ✅ Random **LeetCode-style** or **Codeforces** question selection.
- 🎯 Select **programming language** (JavaScript, Python, C++, Java, TypeScript).
- 💡 View **problem description, examples, constraints**.
- 🧠 Write and edit code using **Monaco Editor** (like VSCode).
- 📅 Schedule interviews with **time slots** and **meeting links**.
- 🧠 Store interview records and past sessions (via Convex backend).

## 🧰 Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, TypeScript
- **Code Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **UI**: Shadcn/UI + Lucide Icons
- **Backend**: [Convex.dev](https://convex.dev) (serverless)
- **APIs**:
  - LeetCode (local JSON set)
  - Codeforces (live API fetch)

## 🖼 Demo Preview

_Coming soon — GIF or screenshot here._

## 📦 Installation

```bash
git clone https://github.com/your-username/hiremeet.git
cd hiremeet
npm install
npm run dev
