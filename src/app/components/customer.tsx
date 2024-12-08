import React from 'react';

export default function HeroSection() {
    return (


        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-start mb-8">OUR HAPPY CUSTOMERS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Sarah M.</h3>
                        <p className="text-gray-700">"I'm blown away by the quality and style of the clothes I received from Shopico. From everyday wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Alex K.</h3>
                        <p className="text-gray-700">"Finding clothes that align with my personal style used to be a challenge until I discovered Shopico. The range of options they offer is truly remarkable, catering to a variety of tastes and styles."</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">James L.</h3>
                        <p className="text-gray-700">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopico. The selection of clothes is not only diverse but also on-point with the latest trends."</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

