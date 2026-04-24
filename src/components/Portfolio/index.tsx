import { List } from "./index.styled";
import { WorkType } from "./types";
import Work from "./Work";

export default function Portfolio() {
  const portfolio: WorkType[] = [
    {
      title: "FujiFilm Advert",
      type: "Ad Copy",
      subtitle: "Context/Small Blurb",
      page: "/fujifilm",
    },
    {
      title: "Armadillo Enterprises",
      type: "Home age, about us",
      subtitle: "Context/Small Blurb",
      page: "/armadillo",
    },
    {
      title: "American Giant",
      type: "landing page, sales page",
      subtitle: "Context/Small Blurb",
      page: "/american",
    },
    {
      title: "My MuckRack music journalism portfolio",
      type: "content marketing/articles",
      subtitle: "Context/Small Blurb",
      page: "/music",
    },
    {
      title: "???",
      type: "welcome email, promo email(?)",
      subtitle: "Context/Small Blurb",
      page: "/idk",
    },
    {
      title: "Another Ad Copy?",
      type: "",
      subtitle: "Context/Small Blurb",
      page: "/another",
    },
  ];

  return (
    <List>
      {portfolio.map((item) => (
        <Work key={item.page} work={item} />
      ))}
    </List>
  );
}
