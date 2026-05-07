import { Container, Body, Label, Email } from "./index.styled";

export default function Contact() {
  return (
    <Container>
      <Body>
        <Label>Contact Me At:</Label>
        <Email href="mailto:beaucgoodwin@gmail.com">
          beaucgoodwin@gmail.com
        </Email>
      </Body>
    </Container>
  );
}
