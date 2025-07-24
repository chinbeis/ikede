import React from "react";
import Link from "next/link";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-[#E5E7EB] text-gray-800 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Ikede Group
            </h2>
            <p className="text-gray-600">
              Global Leaders in Trade & Project Development
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">
              Contact Us
            </h3>
            <p className="text-gray-600">123 Construction Ave.</p>
            <p className="text-gray-600">City, State 12345</p>
            <p className="text-gray-600">Email: info@ikede.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-500">
                <InstagramLogoIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <TwitterLogoIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-green-500">
                <LinkedInLogoIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 border-t border-gray-300 pt-8">
          &copy; {new Date().getFullYear()} Ikede Group. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
