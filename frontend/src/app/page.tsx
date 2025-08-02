"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center text-gray-800 sm:p-8">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={45}
            className="mb-8 invert dark:invert-0"
          />

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to our platform
          </h1>

          <p className="mb-12 max-w-xl text-lg text-gray-600 sm:text-xl">
            Discover our dynamic digital solutions and explore the features of a modern,
            full-stack application.
          </p>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog/react-hooks"
              className="flex items-center justify-center rounded-xl bg-gray-100 p-6 text-center font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span className="text-2xl mr-3">📖</span> Blog: React Hooks
            </Link>

            <Link
              href="/blog/nextjs-routing"
              className="flex items-center justify-center rounded-xl bg-gray-100 p-6 text-center font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span className="text-2xl mr-3">📖</span> Blog: Next.js Routing
            </Link>

            <Link
              href="/cart"
              className="flex items-center justify-center rounded-xl bg-gray-100 p-6 text-center font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span className="text-2xl mr-3">🛒</span> Cart System
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center justify-center rounded-xl bg-gray-100 p-6 text-center font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span className="text-2xl mr-3">📊</span> Dashboard Layout
            </Link>

            <a
              href="http://localhost:5000/token"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-gray-100 p-6 text-center font-medium text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              <span className="text-2xl mr-3">🔐</span> Generate JWT Token
            </a>
          </div>
        </div>

        <footer className="mt-24 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DigitalFix Solutions
        </footer>
      </main>
    </>
  );
}
