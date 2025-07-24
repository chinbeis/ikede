"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PlusIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin");
    } else {
      fetch("/api/blogs")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }
  }, [router]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link
            href="/admin/new"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <PlusIcon />
            New Post
          </Link>
        </div>
        <div className="bg-white text-gray-800 shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/edit/${post.id}`}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 p-2 inline-block"
                    >
                      <Pencil2Icon className="w-6 h-6" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-900 p-2 inline-block"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
