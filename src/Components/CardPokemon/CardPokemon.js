import { Button, Div, H1, Image } from "./styledCardPokemon";

const CardPokemon = (props) => {
  return (
    <Div background={props.background}>
      {props.name}
      <H1>{props.type}</H1>

      <Image src={props.src} width={props.width} />
      {/* <div>
        <Button onClick={props.onClickAdd}>adicionar</Button>
        <Button onClick={props.onClickDetails}>ver detail.</Button>
      </div> */}
    
    </Div>
  );
};
export default CardPokemon;
