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
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("blogTitle")}
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-12"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-600 transition-all"
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
