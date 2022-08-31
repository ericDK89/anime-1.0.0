import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IAnime {
  id: number,
  duration: number,
  episodes: number,
  genre: string,
  image: string,
  name: string,
  status: string,
  studios: string,
  type: string,
  link: string,
  description: string,
  videoId: string
}

interface AnimeContextProps {
  animes: IAnime[]
}

interface Props {
  children: ReactNode
}

export const AnimeContext = createContext({} as AnimeContextProps)

const AnimeContextProvider = ({ children }: Props) => {
  const [animes, setAnimes] = useState<IAnime []>([])

  const getAnimes = async () => {
    const res = await axios.get("http://localhost:3333/animes")
    const { data } = res
    setAnimes(data)
  }

  useEffect(() => {
    getAnimes()
  }, [])

  return (
    <AnimeContext.Provider value={{ animes }}>
      {children}
    </AnimeContext.Provider>
  )
}

export default AnimeContextProvider