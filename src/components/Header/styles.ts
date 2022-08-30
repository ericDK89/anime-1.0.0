import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80rem;
  margin: 1.5rem auto 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;

  h1 {
    font-size: 2.25rem;
    line-height: 2rem;
    letter-spacing: 0.07em;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      font-size: 1.125rem;
      line-height: 2rem;

      color: ${props => props.theme["blue-300"]};

      &:hover {
        transition: filter 0.2s;
        filter: brightness(0.7);
      }
    }
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;

  border-radius: 37px;

  background-color: ${props => props.theme["blue-800"]};

  input {
    border: none;
    box-shadow: none;

    color: ${props => props.theme["white-300"]};
    background-color: transparent;
  }
`