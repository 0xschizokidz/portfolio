// pages/projects.tsx
import React from 'react';

const projects = [
  {
    title: 'YieldSphere',
    description: 'Yield farming dApp for staking and earning rewards.',
    techStack: 'Solidity, Foundry, Next.js, Ethers.js v6',
    githubLink: 'https://github.com/0xschizokidz/Yield-Farming-DApp',
  },
  {
    title: 'Trading Card Game',
    description: 'Blockchain-based NFT hero battle game with custom abilities.',
    techStack: 'Solidity, Next.js, Ethers.js, React',
    githubLink: 'https://github.com/0xschizokidz/trading-card-game',
    
  },
  {
    title: 'Foundry Smart Contract Lottery',
    description: 'A secure lottery smart contract system developed with Foundry.',
    techStack: 'Solidity, Foundry, Hardhat',
    githubLink: 'https://github.com/0xschizokidz/foundry-smart-contract-lottery',
    
  },
  {
    title: 'Foundry NFT Minting Contract',
    description: 'A custom ERC721 minting contract for NFTs.',
    techStack: 'Solidity, Foundry',
    githubLink: 'https://github.com/0xschizokidz/foundry-nft',
    
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-500 mb-4">{project.techStack}</p>
            <div className="flex justify-between">
              <a href={project.githubLink} target="_blank" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
