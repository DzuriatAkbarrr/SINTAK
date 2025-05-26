import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed w-full bg-amber-600 text-white z-50">
        <nav className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0 w-full md:w-auto">
            <img
              className="w-10 h-10 rounded-full bg-white"
              src="kopi.png"
              alt="Logo"
            />
            <h1 className="font-bold font-serif text-2xl ml-3">
              AROMA SRIWIJAYA
            </h1>
          </div>
          
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto text-lg font-light">
            <li className="hover:bg-amber-800 rounded-sm px-2 py-1 text-center md:text-left">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-amber-800 rounded-sm px-2 py-1 text-center md:text-left">
              <a href="about">About</a>
            </li>
            <li className="hover:bg-amber-800 rounded-sm px-2 py-1 text-center md:text-left">
              <a href="contact">Contact</a>
            </li>
            <li className="hover:bg-amber-800 rounded-sm px-2 py-1 text-center md:text-left">
              <a href="product">Product</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="h-max">
        <Outlet />
      </main>

      <footer className="bottom-0 w-full bg-black p-4 flex justify-center">
        <p className="text-white font-sans text-sm">© 2025 AROMA SRIWIJAYA</p>
      </footer>
    </div>
  );
}
