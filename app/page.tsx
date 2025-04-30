import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind is working 🎉</h1>
      <p className="text-gray-700">Let's build your AI Content Generator</p>
    </main>
  );
}
