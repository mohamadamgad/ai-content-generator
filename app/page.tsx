import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AI Content Generator</h1>
        <p className="text-lg text-gray-600 mb-6">
          Instantly generate high-quality blog content based on your topic, tone, and length — powered by OpenAI.
        </p>
        <Link
          href="/generate"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Start Generating →
        </Link>
      </div>
    </main>
  );
}
