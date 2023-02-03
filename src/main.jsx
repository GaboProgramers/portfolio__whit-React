import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// archivos JSON
import global__es from './translations/es/global.json'
import global__en from './translations/en/global.json'

// translate
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  interpolacion: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global__es
    },
    en: {
      global: global__en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  // </React.StrictMode>,
)
