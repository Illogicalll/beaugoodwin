import { Clickable, Container, Name, SubText, Tagline } from "./index.styled";

export default function Info() {
  return (
    <Container>
      <Name to="/">Beau Goodwin</Name>
      <SubText>
        <Tagline>Creative copywriter from London, UK</Tagline>
        <Clickable to="/about">About Me</Clickable>
        <Clickable to="/contact">Contact</Clickable>
      </SubText>
    </Container>
  );
}
