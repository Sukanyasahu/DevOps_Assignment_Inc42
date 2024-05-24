import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <h1>About Me</h1>
      <p>This is the about page where I tell you about myself.</p>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </div>
  );
}
