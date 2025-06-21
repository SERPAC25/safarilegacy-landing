// ✅ index.js — Landing Page Placeholder

import React from "react";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <img
        src="/logo.png"
        alt="SafariLegacy Logo"
        style={{ width: "240px", height: "auto", marginBottom: "2rem" }}
      />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        SafariLegacy
      </h1>
      <p style={{ fontSize: "1.125rem", maxWidth: "600px" }}>
        We’re working on something special. SafariLegacy is preparing to launch soon. Stay tuned as we build a platform to preserve the memories of your most meaningful hunts.
      </p>
    </main>
  );
}
