// pages/_app.js
import Head from "next/head";
import "../styles/globals.css"; // make sure Tailwind or global CSS is imported

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Merriweather:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
