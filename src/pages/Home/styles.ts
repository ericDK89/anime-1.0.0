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
    margin-bottom: 1.5rem;
    font-size: 1.375rem;
    color: ${props => props.theme["blue-300"]};
  }

  h3 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`

export const Banner = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 25rem;
  margin-bottom: 2.5rem;
  padding: 3rem 2rem 1rem;

  border-radius: 12px;

  /* background-size: 100% 25rem; */
  background-size: cover;

  div {
    max-width: 36rem;
    width: 100%;
    padding: 0.5rem 1rem;

    border-radius: 12px;

    background-color: rgba(0, 0, 0, 0.75);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2.25rem;
    font-weight: 600;
  }

  p {
    text-align: justify;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    border: none;
    border-radius: 9999px;

    background: rgba(0, 0, 0, 0.75);

    line-height: 0;

    color: ${props => props.theme["white-300"]};

    &:focus {
      box-shadow: none;
    }

    &:hover {
      transition: filter 0.2s;
      filter: brightness(0.7);
    }
  }
`

export const AnimeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.8rem;
`