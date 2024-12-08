import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function Product() {
    return (



        <div className="bg-gray-100 py-16">
            < Navbar />
            <div className="container mx-auto px-4">
                <ul className="breadcrumb bg-gray-100 flex text-black p-2 rounded-md mb-4">
                    <li><a href="#">Home</a> &gt;</li>
                    <li><a href="#">Shop</a> &gt;</li>
                    <li><a href="#">Men</a> &gt;</li>
                    <li>T-Shirts</li>
                </ul>

            </div>



            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <img src="product.png" alt="Product Image" className="w-full h-auto rounded-md" />
                            {/* <div className="absolute top-0 right-0 p-2 bg-gray-900 text-white rounded-bl">
                    <p>250 Hug x 22 Hug</p>
                </div> */}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Product Name</h2>
                            <p className="text-gray-700 mb-4">Product Description</p>
                            <div className="mb-4">
                                <span className="text-gray-700 font-bold">Price:</span>
                                <span className="text-blue-500">Rs. 1,999</span>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-2">All Reviews (45)</h3>
                                <div className="flex items-center">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.806-1.594 2.25-2.259 3.597-2.259.97 0 1.941.41 2.657 1.094A7.725 7.725 0 0122.5 7.724c0 2.106-.721 4.052-1.97 5.636a12.096 12.096 0 01-3.704 2.13 12.096 12.096 0 01-3.704-2.13 12.096 12.096 0 01-1.97-5.636A7.725 7.725 0 015.5 7.724c0-2.106.721-4.052 1.97-5.636a12.096 12.096 0 013.704-2.13z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.806-1.594 2.25-2.259 3.597-2.259.97 0 1.941.41 2.657 1.094A7.725 7.725 0 0122.5 7.724c0 2.106-.721 4.052-1.97 5.636a12.096 12.096 0 01-3.704 2.13 12.096 12.096 0 01-3.704-2.13 12.096 12.096 0 01-1.97-5.636A7.725 7.725 0 015.5 7.724c0-2.106.721-4.052 1.97-5.636a12.096 12.096 0 013.704-2.13z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.806-1.594 2.25-2.259 3.597-2.259.97 0 1.941.41 2.657 1.094A7.725 7.725 0 0122.5 7.724c0 2.106-.721 4.052-1.97 5.636a12.096 12.096 0 01-3.704 2.13 12.096 12.096 0 01-3.704-2.13 12.096 12.096 0 01-1.97-5.636A7.725 7.725 0 015.5 7.724c0-2.106.721-4.052 1.97-5.636a12.096 12.096 0 013.704-2.13z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.806-1.594 2.25-2.259 3.597-2.259.97 0 1.941.41 2.657 1.094A7.725 7.725 0 0122.5 7.724c0 2.106-.721 4.052-1.97 5.636a12.096 12.096 0 01-3.704 2.13 12.096 12.096 0 01-3.704-2.13 12.096 12.096 0 01-1.97-5.636A7.725 7.725 0 015.5 7.724c0-2.106.721-4.052 1.97-5.636a12.096 12.096 0 013.704-2.13z" />
                                        </svg>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400"> */}


                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </section>
            < Footer />
        </div>


    )
}