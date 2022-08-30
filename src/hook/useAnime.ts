import { useContext } from "react"
import { AnimeContext } from "../context/AnimeContext"

const useAnime = () => {
  return useContext(AnimeContext)
}

export default useAnime