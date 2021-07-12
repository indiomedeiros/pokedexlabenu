import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: transparent;
  :hover {
    color: whitesmoke;
    font-size: 1.2em;
    text-shadow: 1px 1px 10px yellow;
  }
  margin: 0px -30px;
  border-radius: 15px;
  /* background: ${(props) => props.background}; */
  filter: none;
`;

export const Image = styled.img`
  filter: grayscale();
  max-width: 100%;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  :hover {
    margin: 0px 50px;
    filter: none;
    -moz-transform: scale(2.2);
    -webkit-transform: scale(2.2);
    transform: scale(1.5);

    text-shadow: 1px 1px 20px blue;
  }
  width: 110px;

  height: 100%;
`;

export const Button = styled.button`
  margin: 5px;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
`;
export const H1 = styled.h1`
  :hover {
  }
  font-size: 1.5em;
  color: white;
  margin-bottom: 30px; ;
`;
