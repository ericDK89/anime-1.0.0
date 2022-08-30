import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAnime from "../../hook/useAnime";

const AnimePage = () => {
  const [page, setPage] = useState(0)

  const { animes } = useAnime()
  const { id } = useParams()
  
  useEffect(() => {
    if (id) {
      setPage(Number(id))
    }
  }, [id])

  return (
    <>
      <h1>{animes[page].name}</h1>
    </>
  )
}

export default AnimePage