import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from "react-router-dom"
import AnimeCard from "../../components/AnimeCard"
import useAnime from "../../hook/useAnime"
import { AnimeCardGrid, Banner, Description, HomeContainer } from "./styles"

const Home = () => {
  const { animes, isLoading } = useAnime()

  return (
    <HomeContainer>
      <h2>Explore</h2>
      <span>O que você vai assistir hoje?</span>

      {isLoading ? <span>Carregando...</span> : 

      <Banner 
        showArrows
        showStatus={false} 
        showThumbs={false}
        infiniteLoop
        autoPlay
        stopOnHover
        emulateTouch
      >
        {animes.map(anime => {
          return (
            <Link key={anime?.id} to={`/${anime.link}/${anime.id}`}>
              <div >
                <img src={anime.coverImg} alt={anime.name} />

                <Description>
                  <h3>{anime.name}</h3>
                  <p>{anime.description}</p>
                </Description>
              </div>
            </Link>
          )
        })}
      </Banner>
      }
      <h3>Lançamentos</h3>

      <AnimeCardGrid>
        <AnimeCard />
      </AnimeCardGrid>
    </HomeContainer>
  )
}

export default Home