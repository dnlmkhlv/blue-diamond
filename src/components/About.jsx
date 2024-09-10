const About = () => (
  <div className="py-16 bg-white" data-aos="fade-up" data-aos-duration="3000">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row">
        {" "}
        {/* Added responsive flex layout */}
        <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
          {" "}
          {/* Adjusted margin for smaller screens */}
          <img
            src="/img/dxb.jpg" // Replace with your image path
            alt="About BlueDiamond"
            className="h-64 w-full object-cover rounded-lg" // Adjust size and styling as needed
          />
        </div>
        <div>
          {" "}
          {/* Text container */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About BlueDiamond 💎
          </h2>
          <p className="text-lg text-gray-600">
            Blue Diamond provides a wide range of professional services,
            including cleaning, disinfection, painting, and transportation,
            tailored to meet your specific needs. Based in the UAE with our head
            office in Dubai 🇦🇪 , we are committed to delivering high-quality
            solutions with reliability and care, ensuring every project exceeds
            expectations. Trust Blue Diamond to make your spaces and tasks shine
            with excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
