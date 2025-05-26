import React from 'react'
import { GoChevronRight } from "react-icons/go";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-b from-blue-200 pt-30">
           
            <div className="w-full md:w-1/2 h-full pt-30 px-4 sm:px-10 md:px-20">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl font-serif">
                    All you need to feel better is coffee
                </h1>
                <p className="font-light text-gray-700 pt-4 text-sm sm:text-base">
                    Enjoy every sip of coffee brewed with love because a good day always starts with a perfect cup of coffee. Discover unforgettable taste, aroma and comfort in each of our dishes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-5">
                    <button className="border p-3 rounded-md text-white bg-blue-700 hover:bg-blue-800 cursor-pointer">
                        <a href="contact">Pesan Sekarang</a>
                    </button>
                    <button className="items-center border p-3 rounded-md cursor-pointer">
                        <a href="about">Lihat Selengkapnya</a>
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 h-full flex justify-center items-center p-6">
                <img
                    src="kopiTumpah.png"
                    alt="SINTAK Event"
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </div>
    )
}
