import React from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "The Future of Sustainable Construction",
    date: "July 23, 2025",
    excerpt:
      "Sustainable construction is not just a trend; it's a necessity. In this post, we explore the latest innovations and techniques that are shaping the future of the industry.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Top 5 Tips for a Successful Home Renovation",
    date: "July 15, 2025",
    excerpt:
      "A home renovation can be a daunting task, but with the right planning and execution, it can be a rewarding experience. Here are our top 5 tips for a successful renovation.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "The Importance of Quality Materials in Construction",
    date: "July 1, 2025",
    excerpt:
      "The quality of the materials used in a construction project is crucial to its success. In this post, we discuss the importance of using high-quality materials and how to source them.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const Blog = () => {
  return (
    <div className="bg-navy-blue text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-environmental-green">
          From Our Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-bright-blue text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
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
                <h3 className="text-2xl font-bold mb-2 text-navy-blue">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-2">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-navy-blue font-bold hover:underline"
                >
                  Read More
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
