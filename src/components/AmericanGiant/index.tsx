import amg1 from "../../assets/amg-1.webp";
import amg2 from "../../assets/amg-2.webp";
import { PageWrapper, Container, Title, Row, Img, Copy } from "./index.styled";

export default function AmericanGiant() {
  return (
    <PageWrapper>
      <Container>
        <Title>American Giant — Speculative Landing & Sales Pages</Title>
        <Row>
          <Copy>
            <p>
              With American Giant, my focus was on the quality and the
              production. Made in America was important to me as it established
              the key to understanding the general ethos of the company. They
              were proud to support and source production within the USA, and
              this had an additional effect of appearing more premium.
            </p>
          </Copy>
          <Img src={amg1} alt="American Giant homepage redesign" />
        </Row>
        <Row swapMobile>
          <Img src={amg2} alt="American Giant product page redesign" />
          <Copy>
            <p>
              The quality of the materials was perhaps the most important,
              featuring consistently in product descriptions or under the
              tagline for the Spring Catalogue, repeating how they use 100%
              cotton. The sophisticated look for everyday clothes positioned the
              clothes as both elegant and reliable, accessible yet elevated.
            </p>
          </Copy>
        </Row>
      </Container>
    </PageWrapper>
  );
}
