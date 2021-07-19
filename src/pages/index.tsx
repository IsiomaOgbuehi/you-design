import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../components/navbar/nav';
import HomePage from '../components/homePage';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>You Design</title>
        <meta name="description" content="African Designers" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="wrapper">
        <Nav />
        <HomePage />
      </main>
      <Footer />

    </>
  )
}
