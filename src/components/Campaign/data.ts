import fender1 from "../../assets/fender-1.webp";
import fender2 from "../../assets/fender-2.webp";
import fender3 from "../../assets/fender-3.webp";
import fender4 from "../../assets/fender-4.webp";
import tourismPoster1 from "../../assets/tourism-poster-1.webp";
import tourismPoster2 from "../../assets/tourism-poster-2.webp";
import tourismPoster3 from "../../assets/tourism-poster-3.webp";
import tourismPoster4 from "../../assets/tourism-poster-4.webp";
import tourismCard1 from "../../assets/tourism-card-1.webp";
import tourismCard2 from "../../assets/tourism-card-2.webp";
import tourismCard3 from "../../assets/tourism-card-3.webp";
import tourismCard4 from "../../assets/tourism-card-4.webp";
import tourismStory from "../../assets/tourism-story.webp";
import tourismWebsite from "../../assets/tourism-website.webp";
import patagoniaMag1 from "../../assets/patagonia-mag-1.webp";
import patagoniaMag2 from "../../assets/patagonia-mag-2.webp";
import patagoniaMag3 from "../../assets/patagonia-mag-3.webp";
import patagoniaWeb1 from "../../assets/patagonia-web-1.webp";
import patagoniaWeb2 from "../../assets/patagonia-web-2.webp";
import patagoniaWeb3 from "../../assets/patagonia-web-3.webp";
import patagoniaWeb4 from "../../assets/patagonia-web-4.webp";
import type { CSSProperties } from "react";
import type { WorkType } from "../Portfolio/types";

// An image, a labelled block of quoted copy (one string per paragraph, "\n" for line breaks),
// or a full-width group heading. Items zigzag left/right by default; `style` overrides. An item that
// sets its own gridColumn sits on its own row and restarts the zigzag below it; one that also sets
// gridRow is placed by hand and doesn't affect the flow.
export type GalleryItem =
  | ({ src: string; alt: string } | { label: string; quote: string[] }) & {
      style?: CSSProperties;
    }
  | { heading: string };

export interface CampaignType extends WorkType {
  problem: string;
  insights: string;
  gallery: GalleryItem[];
}

// Full-width centred script block; marginTop matches the spacing above group headings
const scriptStyle: CSSProperties = {
  gridColumn: "1 / -1",
  justifySelf: "center",
  maxWidth: "640px",
  marginTop: "40px",
};

export const campaigns: CampaignType[] = [
  {
    title: "Fender Guitar",
    page: "/fender",
    problem:
      "How do we convince everyday consumers—who are driven by icons rather than gear specs—that a Fender Artist Series guitar is worth its premium price tag, rather than relying solely on guitar-insider bias?",
    insights:
      "Technical jargon and high prices alienate everyday buyers; we need to justify the cost through emotional connections to music heroes.",
    gallery: [
      { heading: "Magazines" },
      {
        src: fender1,
        alt: "The Guitar For Icons — Jimmy Page Telecaster magazine ad",
        style: { gridColumn: 1 },
      },
      {
        src: fender2,
        alt: "The Guitar For Icons — Kurt Cobain Jaguar magazine ad",
        style: { gridColumn: 1 },
      },
      {
        src: fender3,
        alt: "The Guitar For Icons — Tom Morello ‘Arm The Homeless’ guitar magazine ad",
        style: { gridColumn: 1 },
      },
      {
        label: "TV Script",
        // Beside the magazines (rows 2-4, under the heading); marginBlock auto centres it on them
        // (no-op in the mobile stack)
        style: { gridColumn: 2, gridRow: "2 / span 3", marginBlock: "auto" },
        quote: [
          "A man walks into a guitar store, he’s in his late 20’s. The non-Fender sections are grey and dull, dim lights shined upon them. He walks past them all, feeling pulled towards the Fender Guitar section. The section has golden lighting shined upon it and it feels warm and enticing.",
          "He reaches out towards a guitar. It’s a telecaster, similar to one Jimmy Page plays, and as he does the intro to ‘Stairway To Heaven’ by Led Zeppelin starts to play. He then reaches out to an orange telecaster. ‘Born to Run’ by Bruce Springsteen starts to play. He moves to a cream Stratocaster and ‘All Along The Watchtower’ by Jimi Hendrix starts to play. He reaches over to a Jaguar guitar and starts to hear ‘Come As You Are’ by Nirvana. As the music plays, there’s a flashback to him as a young teenager, listening to Nirvana with the headphones on.",
          "The man looks to the side and the room extends all the way out of view, Fender guitars hanging and filling up the seemingly endless space.",
          "He picks up a red Stratocaster. No music plays this time, a voiceover says the words: “Look like the icon, play like yourself”, and with a resolved, determined look, he strides towards the counter to pay. Fades to the graphic then, a Fender logo on screen with the tagline ‘The Guitar For Icons’.",
        ],
      },
      { heading: "Website" },
      {
        src: fender4,
        alt: "Fender ICONS website page",
        style: { gridColumn: "1 / -1" },
      },
    ],
  },
  {
    title: "National Tourism",
    page: "/tourism",
    problem:
      "People are unaware of the places they can visit within the UK for their holidays.",
    insights:
      "The consumer automatically looks abroad because they crave escape, writing off the UK as being boring, because they are unaware of the options available to them. They assume staying within the country means compromising on a holiday.",
    gallery: [
      { heading: "Posters" },
      { src: tourismPoster1, alt: "Canterbury Cathedral poster" },
      { src: tourismPoster2, alt: "Edinburgh Castle poster" },
      { src: tourismPoster3, alt: "The National Gallery poster" },
      { src: tourismPoster4, alt: "The Shire Way poster" },
      { heading: "Cards" },
      { src: tourismCard1, alt: "Buckingham Palace card" },
      { src: tourismCard2, alt: "Edinburgh Castle card" },
      { src: tourismCard3, alt: "The National Gallery card" },
      { src: tourismCard4, alt: "Stonehenge card" },
      { heading: "Instagram Story" },
      { src: tourismStory, alt: "Explorer Cards Instagram story" },
      { heading: "Website" },
      {
        src: tourismWebsite,
        alt: "Visit Britain Explorer Cards website page",
        style: { gridColumn: "1 / -1" },
      },
      {
        label: "TV Script",
        style: scriptStyle,
        quote: [
          "London Cafe, a group of school children and commuters are huddled over a woman in a pantsuit (lawyer/financier). She tears open a pack of the national tourism cards, everyone waits with bated breath as she shuffles through the cards before holding up a silver, shiny card of the ‘Tower of London’. Even the barista at the back has stopped work to watch the pack opening.\n• Woman in suit: (Excitedly) \"No way! I got the Tower of London!\"\nA child nearby gets excited while another man, in his 40s, points to the bottom of the card.\n• Man: “This gets you a discount at the Tower... Not a bad find at all...”",
          "The camera pans rapidly, transitioning from the cafe to a hill overlooking the Seven Sisters. A group of friends (uni age) are sitting on a picnic blanket. They are all holding national tourism cards, two in the group eagerly trying to trade their cards.\n• Friend 1: \"I'll trade you my Stonehenge for your Cavern Club.\"\n• Friend 2: \"Deal.\" (They high-five).",
          "Camera transitions quickly to a farm in rural England. A muddy tractor sits in the background, sheep are running around in the background. Two farmers, old man and his middle-aged son, are leaning against a wooden fence, comparing cards.\n• Old man: \"Back in my day, we just visited the Cotswolds, we didn't collect 'em.\"\n• Younger man: (Smiling) \"Dad, look at this Cheddar Gorge card. Do you remember when you took us there for my 12th birthday?”",
          "Another camera transition, this time to a canalboat on the Royal Union Canal in the midlands. It’s peaceful and sunny, other boats slowly passing. A retired couple is sitting on the stern of the boat. They are having a light lunch with cheese, grapes and bread in front of them on a cutting board. The husband is proudly sticking a card into an official collector's binder.\n• Husband: \"That’s the Peak District finally, now we just need the Scottish Highlands now.\"\nThe woman smiles at her husband while spreading cheese on a cracker.\n• Wife: “That’s lovely, dear. Would you like some more grapes?”",
          "Scene transitions and camera pans upwards to windy, dramatic skies. A group of hikers are looking up at the Angel of the North, holding the matching card and reading aloud a fact from it.\n• Hiker at the front of group, holding the card in view of the camera: \"This is believed to be the biggest Angel statue in the world...”",
          "The setting shifts to the outside of 10 Downing Street. The room is packed with journalists, cameras flashing. The Prime Minister stands at the podium, looking incredibly serious. He looks ready to deliver a serious message to the country\n• Prime Minister: \"There is a matter of urgent domestic importance I must address.\"\nThe press pool goes dead silent. Journalists lean forward, pens poised.\nThe PM reaches into a suit jacket pocket, pulls out a crisp, golden foil and reflective trading card.\n• Prime Minister: (Beaming, holding up the card) \"I finally got Buckingham Palace - my collection is complete! Right, any questions on the budget?\"",
          "Cut to a beautiful montage of British scenery and landmarks with the corresponding card layered over each scene. The official logo pops up alongside a voice-over.\n• NARRATOR: \"Our history. Our landmarks. Your Cards. Explore the country, one pack at a time.\"",
        ],
      },
    ],
  },
  {
    title: "Patagonia",
    page: "/patagonia",
    problem:
      "How do we persuade consumers to invest in high-priced, sustainable Patagonia gear instead of cheaper competitors, despite the paradox of telling people to buy less?",
    insights:
      "The customer will hesitate at a larger price point, but will gladly invest their money if they can be assured of long-term benefits like a repair scheme. There is an emotional pay-off, too, with the environment and the sustainability aspect, with the consumer feeling good for being conscious of their impact on the world.",
    gallery: [
      { heading: "Magazines" },
      { src: patagoniaMag1, alt: "It’s Better In Person — Matterhorn magazine ad" },
      { src: patagoniaMag2, alt: "It’s Better In Person — Desert lightning storm magazine ad" },
      { src: patagoniaMag3, alt: "It’s Better In Person — Hiker at sunset magazine ad" },
      { heading: "Websites" },
      { src: patagoniaWeb1, alt: "The Explorers Wardrobe website homepage" },
      { src: patagoniaWeb2, alt: "The Explorer’s Wardrobe website promo" },
      { src: patagoniaWeb3, alt: "The Patagonia Life Guarantee website page" },
      { src: patagoniaWeb4, alt: "The Explorers Wardrobe product page" },
      {
        label: "TV Script",
        style: scriptStyle,
        quote: [
          "Open with a scene of a young man opening a gift by a Christmas tree. He pulls out a Patagonia Retro-X Jacket. Grinning, he looks up at his parents and rushes to hug them.",
          "Transition to the young man walking up a mountain in South America. He has a camera, taking photos. It’s sunny and the view is clear, he’s smiling widely as he looks around, wearing the Retro-X Jacket.",
          "Then transition again to the man wearing the jacket as he hikes the Dolomites. He’s older now, in his 30’s, and he’s joined with his girlfriend. He holds a digital camera out to take a selfie of the two of them.",
          "Another transition, this time he has a small family, two children around 11 and 9 years old (boy and girl), running in front of him and his wife as they walk through an area of outstanding beauty in England. Again, he’s wearing the jacket. With each scene the jacket shows slightly more wear.",
          "Now transition to the final scene. His son has grown up, around 18 years old now, and is preparing to go travelling. At the departure area in the Airport, the father passes the jacket to his son, tearfully going to hug him.",
          "There’s a voiceover as the camera lingers on the two hugging. “For a lifetime of experience, shop Patagonia...”",
        ],
      },
    ],
  },
];
