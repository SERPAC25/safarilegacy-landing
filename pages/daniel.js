// pages/daniel.js

export default function DanielFirstHunt() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", backgroundColor: "#fdfdfd" }}>
      {/* Hero Section */}
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Daniel’s First Hunt</h1>
      <p style={{ fontSize: "1.1rem", color: "#6c6c6c" }}>Springbuck | Eastern Cape | 2023</p>

      {/* Vimeo Video */}
      <div style={{ position: "relative", paddingTop: "56.25%", marginTop: "2rem", marginBottom: "2rem" }}>
        <iframe
          src="https://player.vimeo.com/video/1095256795?h=8e84d11675&badge=0&autopause=0&player_id=0&app_id=58479"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          title="Daniel's First Hunt 2024"
        ></iframe>
      </div>

      {/* Story Section */}
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1a1a1a" }}>The Story</h2>
      <p style={{ lineHeight: "1.6", fontSize: "1rem", color: "#333", maxWidth: "800px" }}>
        Daniel’s first hunting experience was unforgettable. At just 8 years old, he took his first Springbuck as part of a youth program
        run by Splitting Image Taxidermy. They mounted the buck for free, creating a memory that will last a lifetime.
        SafariLegacy was born from this moment.
      </p>

      {/* Gallery Section */}
      <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem", color: "#1a1a1a" }}>Photo Gallery</h2>
      <img
        src="/daniel-hunt.jpg"
        alt="Daniel holding his first Springbuck trophy"
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
        }}
      />
    </div>
  );
}
