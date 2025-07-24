"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminHeader = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("isAdmin") === "true");
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
    router.push("/admin");
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <Link href="/admin/dashboard" className="text-xl font-bold">
        Ikede Admin
      </Link>
      {isAdmin && (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default AdminHeader;
