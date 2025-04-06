// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Muhammad Helmi Jamil</h1>
      <h2 className="text-xl font-medium mb-6">Blockchain Developer</h2>

      <p className="max-w-xl text-center text-gray-600 mb-6">
        Turning Ideas Into Decentralized Solutions. Experienced in Solidity, Foundry, and full-stack dApp development.
      </p>

      <div className="flex space-x-4 mb-8">
        <a href="https://github.com/0xschizokidz" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/m-helmi/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
          <FaLinkedin />
        </a>
      </div>

      <div className="flex space-x-4 mb-8">
        <Link href="/projects">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            View Projects
          </button>
        </Link>

        <Link href="/aboutme">
          <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            About Me
          </button>
        </Link>
      </div>
    </main>
  );
}
