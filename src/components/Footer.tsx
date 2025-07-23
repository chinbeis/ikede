import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-environmental-green text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Ikede Construction</h2>
            <p className="text-gray-300">
              Building the future, one project at a time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy-blue">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-navy-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-navy-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-navy-blue transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-navy-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-navy-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy-blue">
              Contact Us
            </h3>
            <p className="text-gray-300">123 Construction Ave.</p>
            <p className="text-gray-300">City, State 12345</p>
            <p className="text-gray-300">Email: info@ikede.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-navy-blue">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-navy-blue">
                Facebook
              </Link>
              <Link href="#" className="hover:text-navy-blue">
                Twitter
              </Link>
              <Link href="#" className="hover:text-navy-blue">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-8 border-t border-gray-400 pt-8">
          &copy; {new Date().getFullYear()} Ikede Construction. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
