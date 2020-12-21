import React, { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const ClownWrapper = styled.div`
  position: fixed;
  bottom: 0;
  font-size: 0;

  .circle {
    border-radius: 50%; 
    width: 93px; 
    height: 93px;
    position: absolute;
    background-color: red; 
    left: 293px; 
    top: 240px;
    cursor: pointer;
    opacity: 0;

    &:hover {
      opacity: .1;
    }
  }
`;

export default function Home() {
  const [click, setClick] = useState(false)
  console.log(click)
  return (
    <div className='container'>
      <Head>
        <title>segall</title>
        <link rel="icon" href="/static/svg/peepoclown.svg" />
      </Head>
      <ClownWrapper className={'rotate' + (click ? ' down' : '')}>
        <div className='circle' onClick={() => setClick(!click)} />
        <img src="/static/svg/peepoclown.svg" width="500px" style={{ }} />
      </ClownWrapper>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
