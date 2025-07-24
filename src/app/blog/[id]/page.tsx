"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`/api/blogs/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch post");
          return res.json();
        })
        .then((data) => setPost(data))
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-900 text-white">
        Error: {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-block mb-4 sm:mb-6 text-white bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-300"
        >
          ← Back to Blog
        </Link>
        <div className="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[3/1]">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              {post.date}
            </p>
            <div
              className="prose prose-sm sm:prose-base md:prose-lg max-w-full text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;