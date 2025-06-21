// pages/daniel.js

import Image from 'next/image';

export default function DanielHuntPage() {
  return (
    <div style={{ backgroundColor: '#f5f3ef', fontFamily: 'sans-serif', padding: '2rem', color: '#2c2b28' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Daniel’s First Hunt</h1>
        <p style={{ fontSize: '1.2rem', color: '#6e665f' }}>Springbuck | Eastern Cape | 2023</p>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Image
          src="/daniel-hero.jpg"
          alt="Daniel's Springbuck Trophy"
          width={800}
          height={450}
          style={{ borderRadius: '8px' }}
        />
      </section>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1095256795?h=8e84d11675&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            title="Daniel's First Hunt 2024"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>The Story</h2>
        <p>
          Daniel’s first hunting experience was unforgettable. At just 8 years old, he took his first Springbuck as part of a youth program run by Splitting Image Taxidermy. They mounted the buck for free, creating a memory that will last a lifetime. SafariLegacy was born from this moment.
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#999' }}>
        <p>Want to create a memory like this? <a href="/" style={{ color: '#5a422e' }}>Visit SafariLegacy.co.za</a></p>
      </footer>
    </div>
  );
}
