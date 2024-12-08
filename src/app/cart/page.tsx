import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function Cart() {
    return (




        <section className="bg-gray-100 py-16">
            < Navbar />
            <div className="container mx-auto px-4">
                <ul className="breadcrumb bg-white flex text-black p-2 rounded-md mb-4">
                    <li><a href="#">Home</a> &gt;</li>
                    <li>Cart</li>
                </ul>
            </div>

            <div>

                <section className="bg-gray-100 py-16" />
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-300 p-4 rounded-md">
                            <img src="cartshirt.png" alt="Product Image" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Gradient Graphic T-shirt</h3>
                            <p className="text-gray-700 mb-2">Size: Large</p>
                            <p className="text-gray-700 mb-4">Color: White</p>
                            <div className="flex items-center mb-4">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">-</button>
                                <input type="number" className="border border-gray-300 p-2 w-12 mx-4" value="1" />
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">+</button>
                            </div>
                            <p className="text-xl font-bold">$145</p>
                        </div>

                        <div className="border border-gray-300 p-4 rounded-md">
                            <img src="cartfs.png" alt="Product Image" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Checkered Shirt</h3>
                            <p className="text-gray-700 mb-2">Size: Medium</p>
                            <p className="text-gray-700 mb-4">Color: Red</p>
                            <div className="flex items-center mb-4">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">-</button>
                                <input type="number" className="border border-gray-300 p-2 w-12 mx-4" value="1" />
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">+</button>
                            </div>
                            <p className="text-xl font-bold">$180</p>
                        </div>

                        <div className="border border-gray-300 p-4 rounded-md">
                            <img src="cartjens.png" alt="Product Image" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Skinny Fit Jeans</h3>
                            <p className="text-gray-700 mb-2">Size: Large</p>
                            <p className="text-gray-700 mb-4">Color: Blue</p>
                            <div className="flex items-center mb-4">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">-</button>
                                <input type="number" className="border border-gray-300 p-2 w-12 mx-4" value="1" />
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">+</button>
                            </div>
                            <p className="text-xl font-bold">$240</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </section>

    )
}



