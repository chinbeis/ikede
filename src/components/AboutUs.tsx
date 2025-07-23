import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-navy-blue text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-environmental-green">
              About Ikede Construction
            </h2>
            <p className="text-gray-300 mb-4 text-lg">
              Ikede Construction has been a leader in the construction industry
              for over 20 years. We specialize in commercial and residential
              projects, and our commitment to quality and customer satisfaction
              is second to none.
            </p>
            <p className="text-gray-300 text-lg">
              Our team of experienced professionals is dedicated to delivering
              exceptional results on time and on budget. We pride ourselves on
              our attention to detail and our ability to exceed our clients&apos;
              expectations.
            </p>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60"
                alt="About Us Image 1"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1497366210541-8d17c7f43e22?auto=format&fit=crop&w=800&q=60"
                alt="About Us Image 2"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
