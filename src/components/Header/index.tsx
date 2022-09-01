import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderContent, Label } from "./styles";

const Header = () => {
  const [searchAnime, setSearchAnime] = useState("")

  const navigate = useNavigate()

  const handleSearchAnime = (e: FormEvent) => {
    e.preventDefault()
    navigate(`one-piece/${searchAnime}`)
    setSearchAnime("")
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Anime-1.0.0</h1>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/list">Lista de animes</Link>
        </nav>
      </HeaderContent>

      <form onSubmit={handleSearchAnime}>
        <Label htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="Pesquise no site"
            value={searchAnime}
            required
            onChange={e => setSearchAnime(e.target.value)}
          />
          <MagnifyingGlass size={24} />
        </Label>
      </form>
    </HeaderContainer>
  )
}

export default Header