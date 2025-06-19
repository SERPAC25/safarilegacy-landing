// pages/daniel.js

import Image from 'next/image';

export default function DanielHuntPage() { return ( \<div style={{ backgroundColor: '#f5f3ef', fontFamily: 'sans-serif', padding: '2rem', color: '#2c2b28' }}> \<header style={{ textAlign: 'center', marginBottom: '2rem' }}> \<h1 style={{ fontSize: '2.5rem' }}>Daniel’s First Hunt \<p style={{ fontSize: '1.2rem', color: '#6e665f' }}>Springbuck • Free State • April 2024

```
  <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <Image
      src="/daniel-hero.jpg"  // Replace with your actual image path
      alt="Daniel's Springbuck Trophy"
      width={800}
      height={450}
      style={{ borderRadius: '8px' }}
    />
  </section>

  <section style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
    <p>
      This was the day it all began. As part of Splitting Image’s youth hunting initiative,
      Daniel took down his first springbuck with calm focus and a steady hand. What followed
      was a moment of pride, legacy, and unforgettable emotion.
    </p>
    <p>
      The buck was mounted and gifted to him by the team, a gesture that sparked the idea for
      SafariLegacy. This page is dedicated to that memory — and every future one that follows.
    </p>
  </section>

  <section style={{ textAlign: 'center', marginTop: '3rem' }}>
    <video width="800" controls style={{ borderRadius: '8px' }}>
      <source src="/daniel-hunt-optimized.mp4" type="video/mp4" />  // Updated video path
      Your browser does not support the video tag.
    </video>
  </section>

  <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#999' }}>
    <p>Want to create a memory like this? <a href="/" style={{ color: '#5a422e' }}>Visit SafariLegacy.co.za</a></p>
  </footer>
</div>
```

); }
