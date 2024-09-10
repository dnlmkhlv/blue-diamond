const ContactForm = () => (
  <div className="py-16 bg-white-100" data-aos="fade-up">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg shadow-md p-8">
        {" "}
        {/* Added card styles */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Send Us a Message ✉️
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 ease-in-out" // Added transition
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 ease-in-out" // Added transition
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message..."
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 ease-in-out" // Added transition
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn-gradient w-full text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out" // Updated button color and added transition
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;
