import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundImage: "url('/daniel-hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "0 1rem"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to SafariLegacy</h1>
      <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
        Preserving memories of your most meaningful hunts.
      </p>
      <Link href="/daniel">
        <a style={{
          marginTop: "1.5rem",
          backgroundColor: "#5a3b1d",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.125rem"
        }}>
          View Daniel’s First Hunt
        </a>
      </Link>
    </main>
  );
}
