import { useState } from "react"
import AnimeCard from "../../components/AnimeCard"
import useAnime from "../../hook/useAnime"
import { AnimeCardGrid, Banner, HomeContainer } from "./styles"

const Home = () => {
  const [page, setPage] = useState(0)

  const changePage = () => {
    if (page === 5) {
      return 
    } else {
      setPage(page + 1)
    }
  }

  const changePage1 = () => {
    if (page === 0) {
      return
    } else {
      setPage(page - 1)
    }
  }

  const { animes } = useAnime()

  return (
    <HomeContainer>
      <h2>Explore</h2>
      <span>O que você vai assistir hoje?</span>

      <Banner
        style={{ 
          backgroundImage: `url(${animes[page]?.image})`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div key={animes[page]?.id}>
          <h3>{animes[page]?.name}</h3>
          <p>{animes[page]?.description}</p>
        </div>
      </Banner>

      <h3>Lançamentos</h3>
      <button type="button" onClick={changePage}>{page} {"==>"}</button>
      <button type="button" onClick={changePage1}>{page} {"<=="}</button>
      
      <AnimeCardGrid>
        <AnimeCard />
      </AnimeCardGrid>
    </HomeContainer>
  )
}

export default Home