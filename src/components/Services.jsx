import {
  PaintbrushVertical,
  Truck,
  ShieldCheck,
  PaintBucket,
  Hammer,
  Leaf,
  Zap,
  Bug,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      name: "Cleaning",
      description:
        "Professional cleaning services for homes and offices. We ensure a spotless environment tailored to your needs.",
      icon: <PaintBucket className="h-6 w-6 text-blue-300 mb-2" />, // Added icon
    },
    {
      name: "Disinfection",
      description:
        "Thorough disinfection to ensure a safe environment. Our team uses top-grade products for maximum effectiveness.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600 mb-2" />, // Added icon
    },
    {
      name: "Painting",
      description:
        "Expert painting services for interior and exterior. We bring your vision to life with quality finishes.",
      icon: <PaintbrushVertical className="h-6 w-6 text-red-500 mb-2" />, // Added icon
    },
    {
      name: "Transportation",
      description:
        "Reliable transportation services for all your needs. We ensure timely and safe delivery of your items.",
      icon: <Truck className="h-6 w-6 text-gray-500 mb-2" />, // Added icon
    },
    {
      name: "Home Renovation",
      description:
        "Transform your living space with our expert renovation services, tailored to your style and needs.",
      icon: <Hammer className="h-6 w-6 text-gray-900 mb-2" />, // New icon
    },
    {
      name: "Gardening",
      description:
        "Professional gardening services to enhance your outdoor space, including landscaping and maintenance.",
      icon: <Leaf className="h-6 w-6 text-green-500 mb-2" />, // New icon
    },
    {
      name: "Electrical Services",
      description:
        "Reliable electrical services for installations, repairs, and maintenance to keep your home safe and efficient.",
      icon: <Zap className="h-6 w-6 text-yellow-300 mb-2" />, // New icon
    },
    {
      name: "Pest Control",
      description:
        "Effective pest control solutions to protect your home from unwanted guests, ensuring a safe environment.",
      icon: <Bug className="h-6 w-6 text-red-800 mb-2" />, // New icon
    },
  ];

  return (
    <div className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Our Services 💯
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105" // Added hover effect
            >
              {service.icon} {/* Render the icon */}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="btn btn-gradient mt-4 w-full text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">
                {" "}
                {/* Button styling */}
                Book Now <span className="ml-1">→</span> {/* Arrow icon */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
