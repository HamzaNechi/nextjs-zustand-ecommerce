"use client";

import Link from "next/link";
import CartBadge from "../cart/CartBadge";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Home */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase text-black font-serif">
              Armani Style
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 uppercase text-xs font-medium tracking-widest text-gray-900">
            <Link href="/" className="hover:text-gray-500 transition duration-300">
              Accueil
            </Link>

            <Link href="/shop" className="hover:text-gray-500 transition duration-300">
              Boutique
            </Link>

            <Link href="/cart" className="hover:text-gray-500 transition duration-300 flex items-center">
              Panier <span className="ml-1"><CartBadge /></span>
            </Link>

            {!user ? (
              <Link href="/login" className="hover:text-gray-500 transition duration-300">
                Sign In
              </Link>
            ) : (
              <div className="flex items-center space-x-6">
                <span className="text-gray-500">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={logout}
                  className="hover:text-gray-500 transition duration-300 uppercase"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}