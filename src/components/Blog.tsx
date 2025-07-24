"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="bg-blue-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-500">
          {t("blogTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#E5E7EB] text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-900 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-900 font-bold hover:underline"
                >
                  {t("readMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
