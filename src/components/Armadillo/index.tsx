import arm1 from "../../assets/arm-1.webp";
import arm2 from "../../assets/arm-2.webp";
import { PageWrapper, Container, Title, Row, Img, Copy } from "./index.styled";

export default function Armadillo() {
  return (
    <PageWrapper>
      <Container>
        <Title>Armadillo Enterprises — Speculative Home & About Us Pages</Title>
        <Row>
          <Copy>
            <p>
              In my redesign of the home page and about us page for Armadillo
              Enterprises, I wanted to emphasise the effort taken to ensure the
              best with customer service, as well as highlight the evolution of
              the company. I ensured that the brand voice was warm and friendly,
              aiming to be approachable and welcoming.
            </p>
          </Copy>
          <Img src={arm1} alt="Armadillo Enterprises homepage redesign" />
        </Row>
        <Row swapMobile>
          <Img src={arm2} alt="Armadillo Enterprises about us page redesign" />
          <Copy>
            <p>
              Consumer care is brought to the forefront with a focus on
              accessibility, highlighting how Armadillo Enterprises makes
              premium quality products at an affordable rate for everyday
              consumers.
            </p>
          </Copy>
        </Row>
      </Container>
    </PageWrapper>
  );
}
