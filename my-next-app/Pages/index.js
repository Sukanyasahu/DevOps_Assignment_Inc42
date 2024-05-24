import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>
      <h1>Welcome to My Blog</h1>
      <p>This is the homepage of my blog.</p>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
