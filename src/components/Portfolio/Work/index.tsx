import { Container, Title, Subtitle } from "./index.styled";
import { WorkProps } from "./types";

export default function Work({ work }: WorkProps) {
  return (
    <Container to={work.page}>
      <Title>
        {work.title} - {work.type}
      </Title>
      <Subtitle>{work.subtitle}</Subtitle>
    </Container>
  );
}
