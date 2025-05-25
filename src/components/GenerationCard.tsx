'use client';

import { Generation } from '@prisma/client';
import { ClipboardCopy } from 'lucide-react';

type Props = {
  generation: Generation;
};

export function GenerationCard({ generation }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(generation.content);
  };

  return (
    <li className="relative p-4 border rounded shadow-sm bg-white">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-gray-500 hover:text-blue-600"
        title="Copy content"
      >
        <ClipboardCopy className="w-5 h-5" />
      </button>

      <p className="text-sm text-gray-500 mb-1">
        <strong>Topic:</strong> {generation.topic} | <strong>Tone:</strong> {generation.tone} | <strong>Length:</strong> {generation.length}
      </p>
      <p className="text-sm text-gray-400 mb-2">
        Generated on {new Date(generation.createdAt).toLocaleString()}
      </p>
      <div className="whitespace-pre-wrap break-words text-gray-800 font-mono text-sm">
        {generation.content}
      </div>

    </li>
  );
}
