import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to ぶろーぐ | ここにタイトルが入るんです！</title>
        <meta name="description" content="ブログ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ここにタイトルが入るんです！</h1>
      <p>これはブログです</p>
      <Link href="/">トップページへ</Link>
    </div>
  )
}

export default Index
