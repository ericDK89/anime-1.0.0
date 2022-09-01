import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 73rem;
  width: 100%;
  margin: 2.5rem auto 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  > span {
    display: block;
    font-size: 1.375rem;
    color: ${props => props.theme["blue-300"]};
  }

  h3 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`

export const Banner = styled(Carousel)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 2.5rem;
  padding: 3rem 2rem 1rem;

  button {
    box-shadow: none;
  }

  img {
    width: 73rem;
    height: 25rem;
  }
`

export const Description = styled.div`
  width: 73rem;
  height: 10.6rem;
  padding: 0.5rem 1rem;

  background-color: rgba(0, 0, 0, 0.75);

  border-radius: 12px;

  h3 {
      margin-bottom: 0.25rem;
      font-size: 2rem;
      font-weight: 600;
    }

  p {
    font-size: 0.875rem;
    width: 75%;
    margin: 0 auto;
  }
`

export const AnimeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.8rem;
`