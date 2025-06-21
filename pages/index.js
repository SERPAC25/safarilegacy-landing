import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>SafariLegacy | Relive the Hunt</title>
        <meta name="description" content="A digital memory vault for hunters. Relive the Hunt with SafariLegacy." />
      </Head>

      <main className={styles.container}>
        <img src="/logo-gold.png" alt="SafariLegacy Logo" className={styles.logo} />

        <h1 className={styles.title}>Relive the Hunt</h1>

        <p className={styles.subtitle}>
          We’re building something meaningful —<br />
          a new way to preserve and relive hunting memories.
        </p>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} SafariLegacy. All rights reserved.
        </footer>
      </main>
    </>
  );
}
