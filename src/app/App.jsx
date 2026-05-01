import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import MarketPlace from '../pages/MarketPlace'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Header from '../components/layout/Header'
import BookDetail from '../pages/BookDetail'

import MarketDetail from '../pages/MarketDetail'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationUz from '../locales/translationUz'
import translationRu from '../locales/translationRu'
import translationEn from '../locales/translationEn'
import translationTr from '../locales/translationTr'
import translationFr from '../locales/translationFr'
import Footer from '../components/ui/Footer'


i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
    en: { translation: translationEn },
    tr: { translation: translationTr},
    fr: { translation: translationFr},  
  },
  lng: "uz", 
  fallbackLng: "uz", 
  interpolation: {
    escapeValue: false 
  }
});


function App() {

  return (
    <div className='App'>

      <Header /> 

      <div className="app_content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/market-place" element={<MarketPlace />} />
              <Route path="/market-place/:storeId" element={<MarketDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
      </div>      

      <Footer /> 
    </div>
  )
}

export default App
