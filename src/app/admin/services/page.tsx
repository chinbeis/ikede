"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import servicesData from "../../../../data/services.json";

interface Service {
  id: string;
  image: string;
  title: {
    en: string;
    ja: string;
    pt: string;
  };
  description: {
    en: string;
    ja: string;
    pt: string;
  };
}

const AdminServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(servicesData as Service[]);
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await fetch(`/api/services/${id}`, { method: "DELETE" });
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Services</h1>
          <Link href="/admin/new" className="bg-green-500 text-white px-4 py-2 rounded">
            Add New Service
          </Link>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title (English)</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={service.image} alt={service.title.en} className="w-20 h-20 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{service.title.en}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/edit/${service.id}`} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
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

export default AdminServicesPage;
