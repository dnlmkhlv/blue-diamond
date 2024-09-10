import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/img/building-cleaning.jpg",
    "/img/disinfecting-home.jpg",
    "/img/moving.jpg",
    "/img/plumbing.jpg",
    "/img/repairs.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-100 py-10 sm:py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row items-center">
          {/* Text content - full width on mobile, half width on tablet and up */}
          <div className="w-full flex flex-col sm:w-1/2 mb-8 sm:mb-0 order-2 sm:order-1">
            <h1 className="text-center sm:text-left text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {" "}
              {/* Added leading-tight */}
              Your One-Stop Solution for{" "}
              <span className="bg-blue-300 tracking-tighter py-1 px-2 inline-block">
                All Services
              </span>{" "}
              {/* Added inline-block */}
            </h1>
            {/* Subtitle - below image on mobile, below title on tablet and up */}
            <p className="text-center sm:text-left text-xl text-gray-500 mb-6 order-3 sm:order-2">
              Repairs, Cleaning, Painting, Transportation, and More!
            </p>
            <button className="btn btn-primary mx-4 sm:mx-0 sm:w-64 order-4 sm:order-3">
              Book Now
            </button>
          </div>

          {/* Image Slideshow - full width on mobile, half width and on right for tablet and up */}
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 order-1 sm:order-2">
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Service ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `/api/placeholder/600/400?text=Image ${index + 1} Not Found`;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
