import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Link, withTranslation, i18n } from '../i18n'

const test = {
	'en': 'itsen',
	'ru': 'itsru'
}

function Home({ t, currentLanguage, i18n, res }) {
	console.log(t, i18n, i18n.language);
	console.log(currentLanguage);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
<meta property="og:locale" content="ru_RU" />
<meta property="og:locale:alternate" content="en_US" />
	      <meta property="og:title" content={(i18n.language === 'ru' ? 'RUUU' : 'ENNN') + res} />
	      <meta name="description" content={i18n.language === 'ru' ? 'RUUUDESCR' : 'ENNNDESCR'} />
	      <meta name="og:description" content={i18n.language === 'ru' ? 'RUUU_OG_DESCR' : 'ENNN_OG_DESCR'} />
      </Head>
      <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <main className={styles.main}>
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
      </footer>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const currentLanguage = req ? req.language : i18n.language
  return {
    namespacesRequired: ['common'],
    currentLanguage,
    res: test[currentLanguage]
  }
}

export default withTranslation('common')(Home)