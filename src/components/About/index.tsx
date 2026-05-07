import me from "../../assets/me.webp";
import { Container, Body, Photo } from "./index.styled";

export default function About() {
  return (
    <Container>
      <Body>
        <Photo src={me} alt="Beau Goodwin" />
        <p>
          I'm a 22-year-old London-based writer with a growing portfolio of
          music and culture journalism. My love of language—and the way a single
          line can shift perception—pulled me towards writing early. Discovering
          Joan Didion, Susan Sontag, and James Baldwin only made the pull
          stronger.
        </p>
        <p>
          Over the past two years, I've written reviews and features for outlets
          including Northern Transmissions, Kent Online and various independent
          publications. Whether covering English Teacher, Inhaler, or Suede and
          Manic Street Preachers, I've learned to capture attention quickly,
          keep a reader engaged, and deliver a clear point of view—skills
          central to effective advertising.
        </p>
        <p>
          What excites me about copywriting is the blend of creativity and
          precision: finding the exact words that make someone think, feel, or
          act. I'm enthusiastic, adaptable, and confident working on tight
          turnarounds. Most importantly, I'm eager to learn from experienced
          creatives and contribute ideas of my own.
        </p>
      </Body>
    </Container>
  );
}
