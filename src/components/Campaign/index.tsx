import { PageWrapper, Container, Title, Copy } from "../Fujifilm/index.styled";
import type { CSSProperties } from "react";
import type { CampaignType, GalleryItem } from "./data";
import { Text, Heading, Gallery, GroupLabel, Quote, QuoteLabel } from "./index.styled";

const isBlock = (item?: GalleryItem) =>
  !item || "heading" in item || !!item.style?.gridColumn;

// Zigzag: each item starts one row below the previous, alternating columns and spanning 2 rows, so it
// begins about halfway down its neighbour and same-side items never overlap. Headings and items that
// pin their own column take a row below everything so far and restart the zigzag (k = 0).
// An item alone in its run is centred on its own row instead (`solo`). Items with their own
// gridRow are placed by hand and skipped.
function placements(gallery: GalleryItem[]) {
  let end = 1; // first grid row line below everything placed so far
  let k = 0; // index within the current zigzag run
  let start = 1; // first row of the current run
  return gallery.map((item, i): { style: CSSProperties; solo?: boolean } => {
    if (!("heading" in item) && item.style?.gridRow) return { style: {} };
    if (isBlock(item)) {
      const row = end;
      end = start = row + 1;
      k = 0;
      return { style: { gridRow: row } };
    }
    const row = start + k;
    if (k === 0 && isBlock(gallery[i + 1])) {
      end = start = row + 1;
      return { style: { gridRow: row, gridColumn: "1 / -1" }, solo: true };
    }
    end = Math.max(end, row + 2);
    return { style: { gridColumn: (k++ % 2) + 1, gridRow: `${row} / span 2` } };
  });
}

export default function Campaign({ campaign }: { campaign: CampaignType }) {
  const place = placements(campaign.gallery);
  return (
    <PageWrapper>
      <Container>
        <Title>{campaign.title} — Speculative Campaign</Title>
        <Text>
          <Copy>
            <Heading>Problem</Heading>
            <p>{campaign.problem}</p>
          </Copy>
          <Copy>
            <Heading>Insights</Heading>
            <p>{campaign.insights}</p>
          </Copy>
        </Text>
        <Gallery>
          {campaign.gallery.map((item, i) =>
            "heading" in item ? (
              <GroupLabel key={i} style={place[i].style}>
                {item.heading}
              </GroupLabel>
            ) : (
              <div
                key={i}
                data-solo={place[i].solo || undefined}
                style={{ ...place[i].style, ...item.style }}
              >
                {"quote" in item ? (
                  <>
                    <QuoteLabel>{item.label}</QuoteLabel>
                    <Quote>
                      {item.quote.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </Quote>
                  </>
                ) : (
                  <img src={item.src} alt={item.alt} />
                )}
              </div>
            ),
          )}
        </Gallery>
      </Container>
    </PageWrapper>
  );
}
