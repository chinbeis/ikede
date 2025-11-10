"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as Form from "@radix-ui/react-form";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "ikede2025") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-900">
          Admin Login
        </h1>
        <Form.Root onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleLogin();
        }}>
          <Form.Field name="password">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-medium text-gray-700">
                Password
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="mt-6 w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Login
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default AdminLogin;
