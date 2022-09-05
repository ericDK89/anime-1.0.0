import { useQuery } from "@tanstack/react-query";
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
  videoId: string,
  coverImg: string
}

interface AnimeContextProps {
  animes: IAnime[],
  isLoading: boolean
}

interface Props {
  children: ReactNode
}

export const AnimeContext = createContext({} as AnimeContextProps)

const AnimeContextProvider = ({ children }: Props) => {
  const [animes, setAnimes] = useState<IAnime []>([])

  const { data, isLoading } = useQuery(["animes"], async () => {
    const res = await axios("http://localhost:3333/animes")
    const animeData = res.data

    return animeData
  })

  // const getAnimes = async () => {
  //   const res = await axios.get("http://localhost:3333/animes")
  //   const { data } = res
  //   setAnimes(data)
  // }

  useEffect(() => {
    if (data) {
      setAnimes(data)
    } else {
      return
    }
  }, [data])

  return (
    <AnimeContext.Provider value={{ animes, isLoading }}>
      {children}
    </AnimeContext.Provider>
  ) 
}

export default AnimeContextProvider