import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      height: "100vh",
      backgroundImage: "url('/daniel-hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "1rem",
      color: "#fff"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1
      }} />

      <div style={{ zIndex: 2 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Welcome to SafariLegacy
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Preserving memories of your most meaningful hunts.
        </p>
        <Link href="/daniel">
          <a style={{
            backgroundColor: "#5c4022",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontSize: "1.125rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}>
            View Daniel’s First Hunt
          </a>
        </Link>
      </div>
    </main>
  );
}
