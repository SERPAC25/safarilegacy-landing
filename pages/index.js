// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SafariLegacy | Relive the Hunt</title>
        <meta name="description" content="A digital memory vault for hunters. Relive the Hunt with SafariLegacy." />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center px-6">
          {/* Placeholder for Logo */}
          <img src="/logo-white.png" alt="SafariLegacy Logo" className="mx-auto w-48 mb-8" />

          <h1 className="text-4xl font-bold mb-4">Relive the Hunt</h1>
          <p className="text-lg text-gray-300 mb-10">
            We’re building something meaningful.<br />
            A new way to preserve and relive hunting memories.
          </p>

          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SafariLegacy. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
