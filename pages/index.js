// ✅ index.js — SafariLegacy Landing Page

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#f9f6f2",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Hero Section */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img
          src="/daniel-hero.jpg"
          alt="Safari Legacy Background"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
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
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#fff" }}>Welcome to SafariLegacy</h1>
          <p style={{ fontSize: "1.25rem", margin: "1rem 0", color: "#fff" }}>
            Preserving memories of your most meaningful hunts.
          </p>
          <Link href="/daniel">
            <a style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#5c3d2e",
              color: "#fff",
              fontSize: "1.125rem",
              borderRadius: "8px",
              textDecoration: "none"
            }}>
              View Daniel’s First Hunt
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
