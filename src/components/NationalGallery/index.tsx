import ng1 from "../../assets/ng-1.webp";
import ng2 from "../../assets/ng-2.webp";
import { PageWrapper, Container, Title, Row, Img, Copy } from "./index.styled";

export default function NationalGallery() {
  return (
    <PageWrapper>
      <Container>
        <Title>National Gallery — Speculative Email Campaign</Title>
        <Row>
          <Copy>
            <p>
              The National Gallery is a world-famous art gallery and a point of
              pride for Britain. My intention wasn't to rebrand but to spotlight
              certain aspects. I wanted to put forward the facilities that exist
              within the Gallery while also highlighting the wide range of
              artists featured in the collection.
            </p>
          </Copy>
          <Img src={ng1} alt="National Gallery mailing list email" />
        </Row>
        <Row swapMobile>
          <Img
            src={ng2}
            alt="National Gallery Renoir and Love exhibition email"
          />
          <Copy>
            <p>
              Art, especially that of the Impressionist movement that the
              exhibition focused on, evokes such strong emotions — that of love,
              yearning, and heartache; all essential to the exhibition. It's
              hard to describe paintings with words, and so I used the feelings
              they evoke in the viewer to describe the paintings and the benefit
              of seeing the exhibition.
            </p>
          </Copy>
        </Row>
      </Container>
    </PageWrapper>
  );
}
