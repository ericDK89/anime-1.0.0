import AnimeCard from "../../components/AnimeCard"
import { HomeContainer } from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <h2>Explore</h2>
      <span>O que você vai assistir hoje?</span>

      <article>
        <h3>One Piece</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not 
          only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.
        </p>
      </article>

      <AnimeCard />
    </HomeContainer>
  )
}

export default Home