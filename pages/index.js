import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomePage from "../src/components/templates/homePage"

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}

// export default function Home() {
//   return (
//     <Dashboard />
//   )
// }
