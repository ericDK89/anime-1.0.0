import useAnime from "../../hook/useAnime"
import { CardContainer, CardContent } from "./styles"

const AnimeCard = () => {
  const { animes } = useAnime()

  return (
    <>
    {animes?.map(anime => {
      return (
        <CardContainer key={anime.id}>
          <CardContent to={`/${anime.link}/${anime.id}`} 
            style={{ 
              backgroundImage: `url(${anime.image})`, 
              backgroundSize: `cover`
            }}
          >
            <span>Episódio {anime.episodes}</span>
          </CardContent>
          <strong>{anime.name}</strong>
        </CardContainer>
      )
    })}
    </>
  )
}

export default AnimeCard