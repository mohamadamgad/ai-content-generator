'use client';

import { useState } from 'react';

export default function GeneratePage() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Formal');
  const [length, setLength] = useState('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ topic, tone, length });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">AI Content Generator</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Topic
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="e.g. Time management tips"
            required
          />
        </div>

        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
            Tone
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          >
            <option>Formal</option>
            <option>Casual</option>
            <option>Professional</option>
            <option>Friendly</option>
          </select>
        </div>

        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">
            Length
          </label>
          <select
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Generate
        </button>
      </form>
    </main>
  );
}
