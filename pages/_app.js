import '../styles/globalStyles.css'
import { Link, withTranslation, i18n } from '../i18n'

import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)