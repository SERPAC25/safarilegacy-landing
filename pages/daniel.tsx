import React from "react";

export default function DanielsHunt() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/daniel-hero.jpg"
          alt="Daniel's First Hunt"
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Daniel’s First Hunt</h1>
          <p className="mt-2 text-xl">Springbuck | Eastern Cape | 2023</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 px-4 md:px-20">
        <div className="aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Daniel’s Hunt"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 px-4 md:px-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">The Story</h2>
        <p className="leading-relaxed">
          Daniel’s first hunting experience was unforgettable. At just 8 years old, he took his first Springbuck as part of a youth program run by Splitting Image Taxidermy. They mounted the buck for free, creating a memory that will last a lifetime. SafariLegacy was born from this moment.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="py-10 px-4 md:px-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/gallery1.jpg" alt="Daniel Hunt 1" className="rounded-lg" />
          <img src="/gallery2.jpg" alt="Daniel Hunt 2" className="rounded-lg" />
          <img src="/gallery3.jpg" alt="Daniel Hunt 3" className="rounded-lg" />
        </div>
      </section>

      {/* Hunt Details */}
      <section className="py-10 px-4 md:px-20 max-w-4xl mx-auto text-sm text-gray-400">
        <p>Date: <strong>23 July 2023</strong></p>
        <p>Species: <strong>Springbuck</strong></p>
        <p>Location: <strong>Eastern Cape, South Africa</strong></p>
      </section>

      {/* Footer CTA */}
      <footer className="py-10 text-center">
        <a href="/" className="text-lg underline hover:text-yellow-400">
          Relive Another Hunt →
        </a>
      </footer>
    </main>
  );
}
