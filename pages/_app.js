import '../styles/globalStyles.css'
import { Link, withTranslation, i18n } from '../i18n'

import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return <>
  <script
            dangerouslySetInnerHTML={{
              __html: `(!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js')
  fbq('init', '2844827155744345');
  fbq('track', 'PageView'))`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(
    !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?144",t.onload=function(){VK.Retargeting.Init("VK-RTRG-469918-2xZXE"),VK.Retargeting.Hit()},document.head.appendChild(t)}()
  )`
            }}
          />
  	<Component {...pageProps} />
  	</>
}

export default appWithTranslation(MyApp)