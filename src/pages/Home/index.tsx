import { CaretCircleLeft, CaretCircleRight } from "phosphor-react"
import { useState } from "react"
import AnimeCard from "../../components/AnimeCard"
import useAnime from "../../hook/useAnime"
import { AnimeCardGrid, Banner, HomeContainer } from "./styles"

const Home = () => {
  const [page, setPage] = useState(0)

  const goForward = () => {
    if (page === 5) {
      return 
    } else {
      setPage(page + 1)
    }
  }

  const goBack = () => {
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
          backgroundImage: `url(${animes[page]?.image})`
        }}
      >
        <div key={animes[page]?.id}>
          <h3>{animes[page]?.name}</h3>
          <p>{animes[page]?.description}</p>
        </div>

        <footer>
          <button type="button" onClick={goBack}>
            <CaretCircleLeft size={32} weight="fill" />
          </button>

          <button type="button" onClick={goForward}>
            <CaretCircleRight size={32} weight="fill" />
          </button>
        </footer>
      </Banner>

      <h3>Lançamentos</h3>

      <AnimeCardGrid>
        <AnimeCard />
      </AnimeCardGrid>
    </HomeContainer>
  )
}

export default Home