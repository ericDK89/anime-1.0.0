import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:focus {
  outline: transparent;
	box-shadow: 0 0 0 2px ${props => props.theme["blue-500"]};
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; //14px
  }
}

body {
  background-color: ${props => props.theme["darkblue-500"]};
  color: ${props => props.theme["white-300"]};
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Poppins", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  background-color: ${props => props.theme["blue-800"]};
}

::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme["blue-600"]};
  border-radius: 9999px;
}
`

export default GlobalStyles