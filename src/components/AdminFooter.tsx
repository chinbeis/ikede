import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Ikede Group Admin
    </footer>
  );
};

export default AdminFooter;
