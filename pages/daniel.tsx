// ✅ daniel.tsx — Daniel's First Hunt Memory Page (YouTube Embed Version)

import React from "react";

export default function DanielsHunt() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif"
    }}>
      {/* Hero Section */}
      <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        <img
          src="/daniel-hero.jpg"
          alt="Daniel's First Hunt"
          style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 1rem"
        }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Daniel’s First Hunt</h1>
          <p style={{ marginTop: "0.5rem", fontSize: "1.25rem" }}>Springbuck | Eastern Cape | 2023</p>
        </div>
      </section>

      {/* YouTube Video Embed */}
      <section style={{ padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/D8RxP1ve8uQ"
            title="Daniel’s Hunt"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>The Story</h2>
        <p style={{ lineHeight: "1.6" }}>
          Daniel’s first hunting experience was unforgettable. At just 8 years old, he took his first Springbuck as part of a youth program run by Splitting Image Taxidermy.
          They mounted the buck for free, creating a memory that will last a lifetime. SafariLegacy was born from this moment.
        </p>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: "2rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>Photo Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <img src="/gallery1.jpg" alt="Daniel Hunt 1" style={{ borderRadius: "8px", width: "30%" }} />
          <img src="/gallery2.jpg" alt="Daniel Hunt 2" style={{ borderRadius: "8px", width: "30%" }} />
          <img src="/gallery3.jpg" alt="Daniel Hunt 3" style={{ borderRadius: "8px", width: "30%" }} />
        </div>
      </section>

      {/* Hunt Metadata */}
      <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto", fontSize: "0.9rem", color: "#ccc" }}>
        <p>Date: <strong>23 July 2023</strong></p>
        <p>Species: <strong>Springbuck</strong></p>
        <p>Location: <strong>Eastern Cape, South Africa</strong></p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem 0", textAlign: "center" }}>
        <a href="/" style={{ fontSize: "1.125rem", color: "#fff", textDecoration: "underline" }}>
          Relive Another Hunt →
        </a>
      </footer>
    </main>
  );
}
