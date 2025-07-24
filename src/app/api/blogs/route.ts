import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

async function getBlogs() {
  const data = await fs.readFile(blogsFilePath, "utf-8");
  return JSON.parse(data);
}

export async function GET() {
  const posts = await getBlogs();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const posts = await getBlogs();
  const newPost = await req.json();
  newPost.id = Date.now().toString();
  posts.push(newPost);
  await fs.writeFile(blogsFilePath, JSON.stringify(posts, null, 2));
  return NextResponse.json(newPost, { status: 201 });
}
