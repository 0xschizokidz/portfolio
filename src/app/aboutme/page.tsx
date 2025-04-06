// pages/about.tsx
import React from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="max-w-2xl text-center">
        <p className="text-xl mb-6">
          Hi! I&apos;m Muhammad Helmi Jamil, a passionate blockchain developer based in Klang, Malaysia. I specialize in creating
          decentralized applications (dApps) using Ethereum and other blockchain technologies.
        </p>

        <p className="text-lg mb-6">
          With over 12 years of experience in Research &amp; Development (R&amp;D) and design, I transitioned into the blockchain
          space to apply my skills in creating secure, efficient, and innovative decentralized solutions. My focus is on
          building applications that are both user-friendly and impactful in the blockchain ecosystem.
        </p>

        <p className="text-lg mb-6">
          When I&apos;m not developing smart contracts or building dApps, you can find me exploring new blockchain technologies,
          contributing to open-source projects, or sharing knowledge about the potential of blockchain to change industries.
        </p>

        <p className="text-lg mb-6">
          I&apos;m always looking for new opportunities to collaborate on exciting blockchain projects that challenge the status
          quo and push the boundaries of what&apos;s possible.
        </p>
      </div>
    </main>
  );
}
