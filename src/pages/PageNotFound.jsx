import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center font-sans">
            <h1 className="text-9xl font-bold text-red-500 mb-2">404</h1>
            <h2 className="text-4xl font-semibold text-gray-700 mt-0">Page Not Found</h2>
            <p className="text-xl text-gray-500 mb-8">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Go to Home
            </Link>
        </div>
    );
}

export default PageNotFound;