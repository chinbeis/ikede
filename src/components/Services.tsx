import React from "react";

const services = [
  {
    icon: "🏗️",
    title: "Construction",
    description: "We offer a wide range of construction services, from residential to commercial projects.",
  },
  {
    icon: "📐",
    title: "Architecture",
    description: "Our team of architects can help you design your dream project.",
  },
  {
    icon: "💡",
    title: "Consulting",
    description: "We provide expert consulting services to help you with your construction needs.",
  },
  {
    icon: "🏘️",
    title: "Real Estate",
    description: "We can help you find the perfect property for your next project.",
  },
  {
    icon: "🌳",
    title: "Landscaping",
    description: "Our landscaping services will make your property look its best.",
  },
  {
    icon: "🔧",
    title: "Renovation",
    description: "We can help you renovate your existing property to meet your needs.",
  },
];

const Services = () => {
  return (
    <div className="bg-navy-blue text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-environmental-green">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-navy-blue p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-environmental-green">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
