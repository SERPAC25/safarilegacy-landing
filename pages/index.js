import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "4rem", backgroundColor: "#f5f3ef", color: "#2c2b28" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to SafariLegacy</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Preserving memories of your most meaningful hunts.
      </p>
      <Link href="/daniel">
        <a style={{
          backgroundColor: "#5a422e",
          color: "#fff",
          padding: "1rem 2rem",
          borderRadius: "8px",
          fontSize: "1rem",
          textDecoration: "none"
        }}>
          View Daniel’s First Hunt
        </a>
      </Link>
    </main>
  );
}
