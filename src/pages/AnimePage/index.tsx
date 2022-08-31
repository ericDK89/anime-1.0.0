import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import useAnime from "../../hook/useAnime";
import { AnimeList, AnimePageCard, AnimePageContainer, Info, InfoContent, Main, Synopsis, TitleAndVideo } from "./styles";

const AnimePage = () => {
  const [page, setPage] = useState(0)

  const { animes } = useAnime()
  const { id } = useParams()
  
  useEffect(() => {
    if (id) {
      setPage(Number(id))
    }
  }, [id])

  const opts = {
    width: "770",
    height: "472"
  }

  return (
    <AnimePageContainer>
      <Main>
        <TitleAndVideo>
          <h2>
            {`${animes[page]?.name} - Episódio ${animes[page]?.episodes}`}
          </h2>
          <YouTube videoId={animes[page]?.videoId} opts={opts} />
        </TitleAndVideo>

        <Info>
          <InfoContent>
            <img src={animes[page]?.image} alt={animes[page]?.name}/>

            <div>
              <strong>Tipo :</strong>
              <span>{animes[page]?.type}</span>

              <strong>Status :</strong>
              <span>{animes[page]?.status}</span>

              <strong>Estúdio :</strong>
              <span>{animes[page]?.studios}</span>

              <strong>Duração :</strong>
              <span>{animes[page]?.duration}</span>

              <strong>Gênero :</strong>
              <span>{animes[page]?.genre}</span>
            </div>
          </InfoContent>

          <Synopsis>
            <strong>Sinopsia</strong>
            <p>{animes[page]?.description}</p>
          </Synopsis>
        </Info>
      </Main>

      <AnimeList>
        <h2>Animes populares</h2>

        <AnimePageCard>
          {animes.map(anime => {
            return (
              <img key={anime.id} src={anime?.image} alt={anime.name} />
            )
          })}
        </AnimePageCard>
      </AnimeList>
    </AnimePageContainer>
  )
}

export default AnimePage