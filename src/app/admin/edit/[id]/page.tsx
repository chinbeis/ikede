"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import * as Form from "@radix-ui/react-form";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setExcerpt(data.excerpt);
          setImage(data.image);
          setContent(data.content);
        });
    }
  }, [id]);

  const handleSubmit = async () => {
    const updatedPost = {
      title,
      excerpt,
      image,
      content,
    };
    await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
        <Form.Root
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="p-8 bg-white text-gray-800 rounded-lg shadow-md"
        >
          <Form.Field name="title" className="mb-4">
            <Form.Label className="block text-sm font-medium">
              Title
            </Form.Label>
            <Form.Control asChild>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="excerpt" className="mb-4">
            <Form.Label className="block text-sm font-medium">
              Excerpt
            </Form.Label>
            <Form.Control asChild>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="image" className="mb-4">
            <Form.Label className="block text-sm font-medium">
              Image
            </Form.Label>
            <Form.Control asChild>
              <input
                type="file"
                onChange={async (e) => {
                  if (e.target.files) {
                    const file = e.target.files[0];
                    const formData = new FormData();
                    formData.append("file", file);
                    const res = await fetch("/api/upload", {
                      method: "POST",
                      body: formData,
                    });
                    const data = await res.json();
                    setImage(data.url);
                  }
                }}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="content" className="mb-4">
            <Form.Label className="block text-sm font-medium">
              Content
            </Form.Label>
            <Form.Control asChild>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Update Post
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default EditPost;
