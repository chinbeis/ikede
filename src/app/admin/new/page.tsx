"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewServicePage = () => {
  const router = useRouter();
  const [title, setTitle] = useState({ en: "", ja: "", pt: "" });
  const [description, setDescription] = useState({ en: "", ja: "", pt: "" });
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadData.success) {
        throw new Error("Image upload failed");
      }

      const newService = {
        id: `service${Date.now()}`,
        image: uploadData.path,
        title,
        description,
      };

      const serviceRes = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService),
      });

      if (serviceRes.ok) {
        router.push("/admin/services");
      } else {
        throw new Error("Failed to create service");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Add New Service</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1">Title (EN)</label>
            <input
              type="text"
              value={title.en}
              onChange={(e) => setTitle({ ...title, en: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description (EN)</label>
            <textarea
              value={description.en}
              onChange={(e) => setDescription({ ...description, en: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Title (JA)</label>
            <input
              type="text"
              value={title.ja}
              onChange={(e) => setTitle({ ...title, ja: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description (JA)</label>
            <textarea
              value={description.ja}
              onChange={(e) => setDescription({ ...description, ja: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Title (PT)</label>
            <input
              type="text"
              value={title.pt}
              onChange={(e) => setTitle({ ...title, pt: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description (PT)</label>
            <textarea
              value={description.pt}
              onChange={(e) => setDescription({ ...description, pt: e.target.value })}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Image</label>
            <input type="file" onChange={handleFileChange} required className="w-full p-2 border bg-gray-700 border-gray-600 rounded"/>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewServicePage;
