
export default function Home() {
  return (
    <div style={{
      backgroundColor: '#2f2b24',
      color: '#f0e6d2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <img src="/logo.png" alt="SafariLegacy Logo" style={{ width: 120, marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>SafariLegacy</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Relive the Hunt</h2>
      <p style={{ maxWidth: '500px', fontSize: '1.1rem' }}>
        We’re building something special — a place where every trophy tells a story.
        Check back soon to relive the wild through memory pages, reels, and more.
      </p>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>© {new Date().getFullYear()} SafariLegacy. All rights reserved.</p>
    </div>
  );
}
