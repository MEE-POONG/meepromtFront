import React, { useState } from "react";;
import type { AppProps } from 'next/app'
import '../scss/globals.scss'
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Language } from '@/components/Language/types';
import { ParallaxProvider } from 'react-scroll-parallax';


export default function App({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('TH');
  return (
    <React.Fragment>

      <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </LanguageContext.Provider>
    </React.Fragment>
  )
}
