import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
`;
export const Img = styled.img`
  width: 20vw;
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1em;
  text-shadow: 1px 1px 1px black;
  :hover {
    color: yellow;
  }
`;
