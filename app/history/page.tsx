import { prisma } from '@/lib/prisma';
import { GenerationCard } from '@/components/GenerationCard';

export default async function HistoryPage() {
  const generations = await prisma.generation.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Generation History</h1>

      {generations.length === 0 ? (
        <p className="text-gray-600">
          No content generated yet. Go to{' '}
          <a className="text-blue-600 underline" href="/generate">
            /generate
          </a>{' '}
          to create your first one!
        </p>
      ) : (
        <ul className="space-y-4">
          {generations.map((gen) => (
            <GenerationCard key={gen.id} generation={gen} />
          ))}
        </ul>
      )}
    </main>
  );
}
