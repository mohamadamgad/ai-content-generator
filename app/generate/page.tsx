'use client';

import { useState } from 'react';

export default function GeneratePage() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Formal');
  const [length, setLength] = useState('Medium');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, length }),
      });

      const data = await res.json();
      setResult(data.content);
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">AI Content Generator</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-4 px-2 sm:px-0">
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
            maxLength={100}
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
          className={`w-full py-2 px-4 rounded text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
        {loading && (
          <div className="text-sm text-gray-500 mt-2 animate-pulse">Talking to GPT...</div>
        )}

      </form>
      {loading && (
        <div className="mt-6 text-blue-600 text-sm">Generating content, please wait...</div>
      )}

      {result && (
        <div className="mt-6 p-4 border rounded bg-white shadow text-gray-800 leading-relaxed whitespace-pre-wrap">
          {result}
        </div>
      )}

    </main>
  );
}
