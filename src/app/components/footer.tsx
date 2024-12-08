import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100">

      <div className="bg-black text-white py-10 px-5 text-start">
        <h2 className="text-2xl md:text-4xl font-bold">
          STAY UP TO DATE ABOUT
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold">
          OUR LATEST OFFERS
        </h2>
        <div className="mt-6 flex flex-row justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Email Icon */}
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6l-4.5 4.5L7.5 6m12 12H4.5A2.5 2.5 0 012 15.5V6.5A2.5 2.5 0 014.5 4h15a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-2.5 2.5z"
                />
              </svg>
            </span>
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-12 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Button */}
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-r-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold">Shop.Co</h3>
          <p className="text-gray-500 text-sm mt-4">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">

            <a href="https://www.facebook.com/hamnas.khan.12" className="text-gray-500 hover:text-black transition">
              <i className="fab fa-facebook"></i>
            </a>




            {/* <fab fa-facebook />
             */}



            <a href="" className="text-gray-500 hover:text-black transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-black transition">About</a></li>
            <li><a href="#" className="hover:text-black transition">Features</a></li>
            <li><a href="#" className="hover:text-black transition">Works</a></li>
            <li><a href="#" className="hover:text-black transition">Career</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold">Help</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-black transition">Customer Support</a></li>
            <li><a href="#" className="hover:text-black transition">Delivery Details</a></li>
            <li><a href="#" className="hover:text-black transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold">FAQ</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-black transition">Account</a></li>
            <li><a href="#" className="hover:text-black transition">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-black transition">Orders</a></li>
            <li><a href="#" className="hover:text-black transition">Payments</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-black transition">Free eBooks</a></li>
            <li><a href="#" className="hover:text-black transition">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-black transition">How-to Blog</a></li>
            <li><a href="#" className="hover:text-black transition">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 text-gray-500 py-4 text-center">
        <div className="container mx-auto flex justify-between items-center">
          <p>Shop.Co © 2000-2023. All Rights Reserved</p>
          <div className="flex space-x-4">
            <img src="/visa.png" alt="Visa" className="h-10" />
            <img src="/master.png" alt="master" className="h-10" />
            <img src="/paypal.png" alt="PayPal" className="h-10" />
            <img src="/applepay.png" alt="PayPal" className="h-10" />
            <img src="/gpay.png" alt="Google Pay" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}