import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tradalla – Your Local Task & Service Connection Platform</title>
        <meta name="description" content="Find trusted local professionals and taskers for any job across Ireland. Just name it, Tradalla connects it." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tradalla" />
        <meta property="og:description" content="Your trusted Irish platform to find local services and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tradalla.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Tradalla</h1>
        <p>Your local solution for finding services and support.</p>
      </main>
    </>
  );
}
