import styled from "styled-components";

export const AnimePageContainer = styled.div`
  display: flex;
  gap: 1.875rem;

  max-width: 73rem;
  width: 100%;
  margin: 2.5rem auto;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitleAndVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
`

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.5rem; 
`

export const InfoContent = styled.div`
  display: flex;
  gap: 1.875rem;

  img {
    width: 16.875rem;
    height: 23.69rem;
    border-radius: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2rem;
  }

  span {
    margin-bottom: 0.75rem;
    color: ${props => props.theme["blue-400"]};
    line-height: 19.36px;

    &:last-child {
      margin-bottom: none;
    }
  }
`

export const Synopsis = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: ${props => props.theme["blue-300"]};
    line-height: 22.88px;
  }
`

export const AnimeList = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
`

export const AnimePageCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.875rem;

  img {
    width: 10.6rem;
    height: 14rem;
    border-radius: 12px;
  }
`