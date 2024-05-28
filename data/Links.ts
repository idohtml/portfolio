import Pizzeria from "@/app/assets/pizzaria.png";
import Fordonsteam from "@/app/assets/fordonsteam.png";
import Bar from "@/app/assets/sundsgardenbar.png";
import Genesis from "@/app/assets/genesis.png";
import { StaticImageData } from "next/image";

export interface LinkItem {
  href: string;
  src: StaticImageData;
  alt: string;
}

export const links: LinkItem[] = [
  {
    href: "https://www.pizzeriaangela.se/",
    src: Pizzeria,
    alt: "Pizzeria Angela's Website",
  },
  {
    href: "https://fordonsteamet.se/",
    src: Fordonsteam,
    alt: "Fordonsteamet's WordPress Website",
  },
  {
    href: "https://genesis-proj.netlify.app/",
    src: Genesis,
    alt: "Genesis's Website",
  },
  {
    href: "https://main--sundsgardenbar.netlify.app/",
    src: Bar,
    alt: "Sundsgarden Bar's Website",
  },
];
