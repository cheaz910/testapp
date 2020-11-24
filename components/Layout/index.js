import Head from 'next/head'

function App({
  meta: {
    title, description, image, url

  },
  children
}) {
  const metaTitle = title || 'Разработка мобильных приложений'
  const metaDescription = description || 'Превращаем идеи в готовый продукт. Без головной боли'
  const metaImage = image || '/static/svg/bg/main.png'
  const metaUrl = url || ''
  return (
    <div className="App">
      <meta property="og:title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />
      {children}
    </div>
  );
}

export default App;
