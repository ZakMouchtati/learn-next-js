import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div>
        <Head>
        <title>About Page</title>    
        <meta property="og:image" content="https://centralesupelec-exed.ma/lean-leader/static/media/LeanLeader.57bc56db83cab695ddea.jpeg"/>
        </Head>
        ABOUT PAGE
        <Link href="/" >Home Page</Link>
    </div>
  )
}

export default about