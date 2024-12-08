
import React from 'react'

export default function Home() {
    return (

        <div className="container mx-auto px-4">
            <header className="bg-gray-100 py-8">
                <h1 className="text-3xl font-bold text-center">BROWSE BY DRESS STYLE</h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="/causal.png" alt="Casual" className="w-full h-auto rounded-lg" />
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">

                    <img src="/formal.png" alt="Formal" className="w-full h-auto rounded-lg" />
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">

                    <img src="/fashion.png" alt="Party" className="w-full h-auto rounded-lg" />
                </div>

                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="/gm.png" alt="Gym" className="w-full h-auto rounded-lg" />
                </div>
            </section>
        </div>
    )
}