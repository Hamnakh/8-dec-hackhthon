import React from 'react';

export default function ARRIVALS() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">NEW ARRIVALS</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded shadow-md p-4">
                    <img src="t-shirt.png" alt="T-shirt" className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-bold">T-shirt with Tape Details</h3>
                    <p className="text-gray-500">★★★★★ 4.5/5</p>
                    <p className="text-gray-700 font-bold">$120</p>
                </div>

                <div className="bg-white rounded shadow-md p-4">
                    <img src="jeeans.png" alt="Skinny Fit Jeans" className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-bold">Skinny Fit Jeans</h3>
                    <p className="text-gray-500">★★★★★ 3.5/5</p>
                    <p className="text-gray-700 font-bold">$240</p>
                    <p className="text-red-500 line-through">$260</p>
                </div>

                <div className="bg-white rounded shadow-md p-4">
                    <img src="shirt.png" alt="Checkered Shirt" className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-bold">Checkered Shirt</h3>
                    <p className="text-gray-500">★★★★★ 4/5</p>
                    <p className="text-gray-700 font-bold">$180</p>
                </div>

                <div className="bg-white rounded shadow-md p-4">
                    <img src="tt-shirt.png" alt="Sleeve Striped T-shirt" className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-xl font-bold">Sleeve Striped T-shirt</h3>
                    <p className="text-gray-500">★★★★★ 4.5/5</p>
                    <p className="text-gray-700 font-bold">$130</p>
                    <p className="text-red-500 line-through">$160</p>
                </div>
            </div>
        </div>
    )
}