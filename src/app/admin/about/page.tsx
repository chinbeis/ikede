"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import aboutData from "../../../../data/about.json";

interface AboutData {
  whoWeAre: {
    title: { en: string; ja: string; pt: string };
    text1: { en: string; ja: string; pt: string };
    text2: { en: string; ja: string; pt: string };
    image: string;
  };
  ourMission: {
    title: { en: string; ja: string; pt: string };
    text: { en: string; ja: string; pt: string };
  };
  ourVision: {
    title: { en: string; ja: string; pt: string };
    text: { en: string; ja: string; pt: string };
  };
  ourGlobalPresence: {
    title: { en: string; ja: string; pt: string };
    locations: { name: { en: string; ja: string; pt: string } }[];
  };
}

const EditAboutPage = () => {
  const router = useRouter();
  const [data, setData] = useState<AboutData>(aboutData);
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof AboutData,
    field: string,
    lang?: "en" | "ja" | "pt"
  ) => {
    const { value } = e.target;
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      if (lang) {
        newData[section][field][lang] = value;
      } else {
        newData[section][field] = value;
      }
      return newData;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadData.success) {
          setData((prevData) => ({
            ...prevData,
            whoWeAre: {
              ...prevData.whoWeAre,
              image: uploadData.path,
            },
          }));
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("About Us section updated successfully!");
        router.push("/admin/dashboard");
      } else {
        throw new Error("Failed to update About Us section");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Edit About Us Section</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md">
          {/* Who We Are Section */}
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <div className="mb-4">
            <label className="block mb-1">Title (EN)</label>
            <input
              type="text"
              value={data.whoWeAre.title.en}
              onChange={(e) => handleInputChange(e, "whoWeAre", "title", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Text 1 (EN)</label>
            <textarea
              value={data.whoWeAre.text1.en}
              onChange={(e) => handleInputChange(e, "whoWeAre", "text1", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Text 2 (EN)</label>
            <textarea
              value={data.whoWeAre.text2.en}
              onChange={(e) => handleInputChange(e, "whoWeAre", "text2", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          {/* Add inputs for other languages... */}
          <div className="mb-4">
            <label className="block mb-1">Image</label>
            <input type="file" onChange={handleFileChange} className="w-full p-2 border bg-gray-700 border-gray-600 rounded" />
            {data.whoWeAre.image && <img src={data.whoWeAre.image} alt="Who We Are" className="w-20 h-20 object-cover mt-2 rounded" />}
          </div>

          {/* Our Mission Section */}
          <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
          <div className="mb-4">
            <label className="block mb-1">Title (EN)</label>
            <input
              type="text"
              value={data.ourMission.title.en}
              onChange={(e) => handleInputChange(e, "ourMission", "title", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Text (EN)</label>
            <textarea
              value={data.ourMission.text.en}
              onChange={(e) => handleInputChange(e, "ourMission", "text", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          {/* Add inputs for other languages... */}

          {/* Our Vision Section */}
          <h2 className="text-2xl font-bold mb-4 mt-8">Our Vision</h2>
          <div className="mb-4">
            <label className="block mb-1">Title (EN)</label>
            <input
              type="text"
              value={data.ourVision.title.en}
              onChange={(e) => handleInputChange(e, "ourVision", "title", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Text (EN)</label>
            <textarea
              value={data.ourVision.text.en}
              onChange={(e) => handleInputChange(e, "ourVision", "text", "en")}
              className="w-full p-2 border bg-gray-700 border-gray-600 rounded"
            />
          </div>
          {/* Add inputs for other languages... */}

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-8"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAboutPage;
