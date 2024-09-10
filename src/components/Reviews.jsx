const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      text: "Excellent service! The cleaning team was thorough and professional.",
      image: "https://randomuser.me/api/portraits/men/90.jpg", // Replace with actual image path
      rating: 5, // 5-star rating
    },
    {
      name: "Jane Smith",
      text: "I'm impressed with the quality of their painting work. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/52.jpg", // Replace with actual image path
      rating: 5, // 5-star rating
    },
  ];

  return (
    <div className="py-16 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Customer Reviews 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg flex">
              <div className="flex-shrink-0 mr-4">
                {" "}
                {/* Profile picture container */}
                <img
                  src={review.image} // User profile picture
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover" // Profile picture styling
                />
              </div>
              <div className="flex-grow">
                {" "}
                {/* Review text container */}
                <p className="font-semibold">{review.name}</p>
                <div className="flex items-center mb-2">
                  {" "}
                  {/* Rating container */}
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.545-.955L10 0l2.455 5.59L20 6.545l-5.243 4.005 1.121 6.535z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4 italic border-l-4 border-blue-400 pl-4">
                  {" "}
                  {/* Styled quotation */}
                  {review.text}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
