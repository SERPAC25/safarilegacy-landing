// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SafariLegacy | Relive the Hunt</title>
        <meta name="description" content="A digital memory vault for hunters. Relive the Hunt with SafariLegacy." />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-black text-[#d4af37] px-4">
        <div className="text-center">
          <img
            src="/logo-gold.png"
            alt="SafariLegacy Logo"
            className="mx-auto w-64 md:w-80 mb-10"
          />

          <h1 className="text-4xl md:text-5xl font-heading mb-6">
            Relive the Hunt
          </h1>

          <p className="text-lg md:text-xl font-body text-[#f9f9f9] mb-12 max-w-xl mx-auto">
            We’re building something meaningful —<br />
            a new way to preserve and relive hunting memories.
          </p>

          <footer className="text-sm text-gray-500 font-body">
            © {new Date().getFullYear()} SafariLegacy. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}
