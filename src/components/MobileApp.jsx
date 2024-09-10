function MobileApp() {
    return (
      <div className="mb-32 p-2 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="flex flex-col items-center text-center md:text-left space-y-6 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Download Our App 📱</h2>
            <p className="text-lg text-gray-600">
              Manage your booking with ease from your phone
            </p>
            <div className="flex flex-col items-center justify-center md:justify-start gap-4">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="/img/app-store.png" alt="Apple Store" className="h-14 w-auto" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="/img/google-play.png" alt="Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="mockup-phone scale-[0.75] md:scale-75">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <img src="/img/iphone-app.jpg" alt="Mobile App" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MobileApp;