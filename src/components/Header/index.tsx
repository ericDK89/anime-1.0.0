import { MagnifyingGlass } from "phosphor-react"
import { Link } from "react-router-dom"
import { HeaderContainer, HeaderContent, Label } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Anime-1.0.0</h1>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/">Lista de anime</Link>
        </nav>
      </HeaderContent>

      <Label htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="Pesquise no site"
        />
        <MagnifyingGlass size={24} />
      </Label>
    </HeaderContainer>
  )
}

export default Header