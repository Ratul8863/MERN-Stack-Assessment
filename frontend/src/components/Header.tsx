"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt=" Logo" width={32} height={32} />
         <span className="text-xl font-bold text-gray-900">&lt;/&gt; Developers</span>
        </Link>

        {/* Navigation Links */}
        <div className="relative flex items-center space-x-6">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </Link>

          {/* Blog Toggle Drawer */}
          <button
            onClick={() => setIsBlogOpen(!isBlogOpen)}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
          >
            Blog ▾
          </button>

          {isBlogOpen && (
            <div className="absolute right-0 top-12 w-56 rounded-md bg-white border shadow-lg z-50 animate-slide-down">
              <Link
                href="/blog/react-hooks"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsBlogOpen(false)}
              >
                📘 React Hooks
              </Link>
              <Link
                href="/blog/nextjs-routing"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsBlogOpen(false)}
              >
                📗 Next.js Routing
              </Link>
            </div>
          )}

          <Link
            href="/cart"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Cart
          </Link>

          <Link
            href="/dashboard"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
