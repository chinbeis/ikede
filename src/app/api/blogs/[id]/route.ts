import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

async function getBlogs() {
  const data = await fs.readFile(blogsFilePath, "utf-8");
  return JSON.parse(data);
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const posts = await getBlogs();
  const post = posts.find((p: { id: string }) => p.id === params.id);
  if (!post) {
    return new NextResponse("Post not found", { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const posts = await getBlogs();
  const updatedPost = await req.json();
  const index = posts.findIndex((p: { id: string }) => p.id === params.id);
  if (index === -1) {
    return new NextResponse("Post not found", { status: 404 });
  }
  posts[index] = { ...posts[index], ...updatedPost };
  await fs.writeFile(blogsFilePath, JSON.stringify(posts, null, 2));
  return NextResponse.json(posts[index]);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const posts = await getBlogs();
  const filteredPosts = posts.filter((p: { id: string }) => p.id !== params.id);
  if (posts.length === filteredPosts.length) {
    return new NextResponse("Post not found", { status: 404 });
  }
  await fs.writeFile(blogsFilePath, JSON.stringify(filteredPosts, null, 2));
  return new NextResponse(null, { status: 204 });
}
