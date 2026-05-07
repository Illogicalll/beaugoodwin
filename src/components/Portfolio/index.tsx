import { List, Group, SectionLabel } from "./index.styled";
import { WorkType } from "./types";
import Work from "./Work";

export default function Portfolio() {
  const speculative: WorkType[] = [
    { title: "FujiFilm X-Series", page: "/fujifilm" },
    { title: "Armadillo Enterprises", page: "/armadillo" },
    { title: "American Giant", page: "/american" },
    { title: "National Gallery", page: "/idk" },
  ];

  const published: WorkType[] = [
    { title: "Published Work", page: "https://muckrack.com/beau-goodwin-1" },
  ];

  return (
    <List>
      <div>
        <SectionLabel>Speculative</SectionLabel>
        <Group>
          {speculative.map((item) => (
            <Work key={item.page} work={item} />
          ))}
        </Group>
      </div>
      {published.map((item) => (
        <Work key={item.page} work={item} />
      ))}
    </List>
  );
}
