// ✅ index.js — SafariLegacy Landing Page

import React from "react";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#f8f6f2",
      fontFamily: "sans-serif",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      backgroundImage: "url('/daniel-hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center"
    }}>
      {/* Overlay for readability */}
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "4rem 2rem",
        borderRadius: "12px",
        maxWidth: "720px",
        width: "100%"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "1rem"
        }}>
          Welcome to SafariLegacy
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#ddd", marginBottom: "2rem" }}>
          Preserving memories of your most meaningful hunts.
        </p>
        <a
          href="/daniel"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#4b2e19",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "1.125rem",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#663d23"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#4b2e19"}
        >
          View Daniel’s First Hunt
        </a>
      </div>
    </main>
  );
}
