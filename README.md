
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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

