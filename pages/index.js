import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hi, zum Dashboard gehts hier lang</h1>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </>
  )
}

// export default function Home() {
//   return (
//     <Dashboard />
//   )
// }
