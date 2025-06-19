import React from "react";

export default function DanielsHunt() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>
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

      {/* Video Section */}
      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
  <video width="800" controls style={{ borderRadius: '8px' }}>
    <source src="/daniel-hunt-optimized.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


      {/* Story Section */}
      <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>The Story</h2>
        <p style={{ lineHeight: "1.6" }}>
          Daniel’s first hunting experience was unforgettable. At just 8 years old, he took his first Springbuck as part of a youth program run by Splitting Image Taxidermy. They mounted the buck for free, creating a memory that will last a lifetime. SafariLegacy was born from this moment.
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

      {/* Hunt Details */}
      <section style={{ padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto", fontSize: "0.9rem", color: "#ccc" }}>
        <p>Date: <strong>23 July 2023</strong></p>
        <p>Species: <strong>Springbuck</strong></p>
        <p>Location: <strong>Eastern Cape, South Africa</strong></p>
      </section>

      {/* Footer CTA */}
      <footer style={{ padding: "2rem 0", textAlign: "center" }}>
        <a href="/" style={{ fontSize: "1.125rem", color: "#fff", textDecoration: "underline" }}>
          Relive Another Hunt →
        </a>
      </footer>
    </main>
  );
}
