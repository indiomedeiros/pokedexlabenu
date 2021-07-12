import styled from "styled-components";
import GlobalState from "./GlobalState/GlobalState";
import Home from "./Pages/Home/Home";
import Router from "./Router/Router";

const Body = styled.body`
  margin: -8px;
  padding: 0;
`

export default function App() {
  return (
    <Body>
      <GlobalState>
        <Router />
      </GlobalState>
    </Body>
  );
}
