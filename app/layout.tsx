import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'AI Content Generator',
  description: 'Generate content using OpenAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="w-full bg-blue-600 text-white px-4 py-3 shadow">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-lg font-semibold hover:underline">
              AI Generator
            </Link>
            <div className="space-x-4 text-sm">
              <Link href="/generate" className="hover:underline">
                Generate
              </Link>
              <Link href="/history" className="hover:underline">
                History
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
