import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>

      {/* Hero Section */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img
          src="/daniel-hero.jpg"
          alt="Safari Legacy Cover"
          loading="lazy"
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
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to SafariLegacy</h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Preserving memories of your most meaningful hunts.
          </p>
          <Link href="/daniel">
            <a style={{
              backgroundColor: "#5a422e",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none"
            }}>
              View Daniel’s First Hunt
            </a>
          </Link>
        </div>
      </section>

      {/* Optional Footer */}
      <footer style={{ textAlign: "center", padding: "2rem", fontSize: "0.9rem", color: "#ccc" }}>
        &copy; {new Date().getFullYear()} SafariLegacy. All rights reserved.
      </footer>
    </main>
  );
}
