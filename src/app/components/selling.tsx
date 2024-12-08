import React from 'react';

export default function Selling() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">TOP SELLING</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded shadow-md p-4">
          <img src="full-shirt.png" alt="Vertical Striped Shirt" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Vertical Striped Shirt</h3>
          <p className="text-gray-500">★★★★★ 5/5</p>
          <p className="text-gray-700 font-bold">$212</p>
          <p className="text-red-500 line-through">$232</p>
        </div>

        <div className="bg-white rounded shadow-md p-4">
          <img src="half-tshirt.png" alt="Courage Graphic T-shirt" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Courage Graphic T-shirt</h3>
          <p className="text-gray-500">★★★★★ 4/5</p>
          <p className="text-gray-700 font-bold">$145</p>
        </div>

        <div className="bg-white rounded shadow-md p-4">
          <img src="shorts.png" alt="Loose Fit Bermuda Shorts" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Loose Fit Bermuda Shorts</h3>
          <p className="text-gray-500">★★★★★ 5/5</p>
          <p className="text-gray-700 font-bold">$80</p>
        </div>

        <div className="bg-white rounded shadow-md p-4">
          <img src="skinny-jeens.png" alt="Faded Skinny Jeans" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">Faded Skinny Jeans</h3>
          <p className="text-gray-500">★★★★★ 4/5</p>
          <p className="text-gray-700 font-bold">$210</p>
        </div>
      </div>
    </div>
  )
}