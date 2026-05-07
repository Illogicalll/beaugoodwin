import { Container, Title } from "./index.styled";
import { WorkProps } from "./types";

export default function Work({ work }: WorkProps) {
  const isExternal = work.page.startsWith("http");
  return (
    <Container
      to={work.page}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Title>{work.title}</Title>
    </Container>
  );
}
