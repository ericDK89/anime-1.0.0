import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import AnimePage from "./pages/AnimePage"
import Home from "./pages/Home"

const Router = () => {
  return (
    <Routes> 
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/:anime/:id" element={ <AnimePage /> } />
      </Route>
    </Routes>
  )
}

export default Router