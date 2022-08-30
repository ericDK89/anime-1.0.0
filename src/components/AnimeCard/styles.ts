import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 10.5rem;
  width: 100%;
  height: 17.75rem;
  margin-bottom: 2.25rem;

  strong {
    display: block;
    margin-top: 0.6rem;

    font-weight: 600;
    text-align: center;
  }
`

const BACKGROUND_CARD = {

}

export const CardContent = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 16rem;
  padding: 1.25rem 0.875rem 0.5rem;

  border-radius: 12px;
  
  background-size: cover;

  span {
    padding: 0.25rem;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.75);
  }

  transition: box-shadow 0.2s;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px ${props => props.theme["blue-500"]};
  }
`