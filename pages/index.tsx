import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to ぶろーぐ</title>
        <meta name="description" content="ブログ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ぶろーぐ
        </h1>
        <ul>
          <li><Link href="/blog/page1">ページ1</Link></li>
          <li><Link href="/blog/page2">ページ2</Link></li>
        </ul>
      </main>
    </div>
  )
}

export default Home
