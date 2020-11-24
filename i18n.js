const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['en'],
  localePath:
    typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
  localeSubpaths: {
    en: 'en'
  }
})

const i18nModule = (module.exports = NextI18NextInstance)

i18nModule.appWithTranslation = NextI18NextInstance.appWithTranslation
i18nModule.withTranslation = NextI18NextInstance.withTranslation
i18nModule.Link = NextI18NextInstance.Link
i18nModule.i18n = NextI18NextInstance.i18n
i18nModule.config = NextI18NextInstance.config
i18nModule.i18n = NextI18NextInstance.i18n
i18nModule.config = NextI18NextInstance.config
i18nModule.i18n = NextI18NextInstance.i18n
i18nModule.config = NextI18NextInstance.config
