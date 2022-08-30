import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AnimeContextProvider from "./context/AnimeContext"
import Router from "./Router"
import GlobalStyles from "./styles/global"
import defaultTheme from "./styles/themes/default"

const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AnimeContextProvider>
        <BrowserRouter>
          <Router />   
        </BrowserRouter>  
      </AnimeContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
