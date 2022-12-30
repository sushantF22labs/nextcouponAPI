import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import { connectToDb } from '../db'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  connectToDb()
  return <h1 className="text-3xl font-bold underline bg-red-500">Hello world</h1>
  
}
