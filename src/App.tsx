import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AnimeContextProvider from "./context/AnimeContext"
import Router from "./Router"
import GlobalStyles from "./styles/global"
import defaultTheme from "./styles/themes/default"

const App = () => {

  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={ defaultTheme }>
      <QueryClientProvider client={ queryClient }>
        <AnimeContextProvider>
          <BrowserRouter>
            <Router />   
          </BrowserRouter>  
        </AnimeContextProvider>
      </QueryClientProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
