import fuji1 from "../../assets/fuji-1.webp";
import fuji2 from "../../assets/fuji-2.webp";
import fuji3 from "../../assets/fuji-3.webp";
import { PageWrapper, Container, Title, Hero, Row, Img, Copy } from "./index.styled";

export default function Fujifilm() {
  return (
    <PageWrapper>
    <Container>
      <Title>Fujifilm X-Series — Speculative Campaign</Title>
      <Hero src={fuji1} alt="Capture what no one else will believe" />
      <Row>
        <Copy>
          <p>
            I designed the FujiFilm X-Series advertising with a focus on
            testimonials, using photos that people have taken on the camera that
            were posted to Reddit. People respond well to testimonials as they
            feel they can rely and relate to the experience of other customers,
            thereby trusting the product more. Everyone has access to a camera
            nowadays with smartphones, and the amount of information about
            premium cameras can often be overwhelming for the average consumer,
            so my intention was to strip that away and approach the campaign by
            showing what the camera can do and the capabilities of the products,
            sidelining the technical details.
          </p>
        </Copy>
        <Img src={fuji2} alt="To capture those unmissable moments" />
      </Row>
      <Row swapMobile>
        <Img src={fuji3} alt="For those blink-and-you-miss-it moments" />
        <Copy>
          <p>
            The taglines all focus on capturing a moment in time, immortalising
            it with FujiFilm.{" "}
            <em>"Capture what no one else will believe"</em>,{" "}
            <em>"For those blink-and-you-miss-it moments"</em>, and{" "}
            <em>"To capture those unmissable moments"</em> all highlight the
            capacity of the camera to take breathtaking pictures that amaze.
          </p>
        </Copy>
      </Row>
    </Container>
    </PageWrapper>
  );
}
