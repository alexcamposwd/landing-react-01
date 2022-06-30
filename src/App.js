import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import colors from './styles/themes/variables'

import Home from './pages/Home'
import Informations from './pages/Informations'
import Project from './pages/Project/Project'
import Description from './pages/Description/Description'
import Contacts from './pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
      <Informations />
      <Project />
      <Description />
      <Contacts />
      <Form />
      <Footer />
      <GlobalStyle />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
