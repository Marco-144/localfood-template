import type { MenuCategory } from "../types/business";

import taco1 from "../assets/menu/Taco1.webp";
import Prensado from "../assets/menu/Prensado.webp";
import Chorizo from "../assets/menu/Chorizo.webp";
import Costilla from "../assets/menu/Costilla.webp";
import Frijol from "../assets/menu/Frijol.webp";
import Papa from "../assets/menu/Papa.webp";

export const menuCategories: MenuCategory[] = [
    {
        id: "tacos",
        name: "Tacos",
        description: "Nuestros sabores tradicionales.",
        items: [
            {
                id: "prensado",
                name: "Prensado",
                available: true,
                image: Prensado,
            },
            {
                id: "papa",
                name: "Papa",
                available: true,
                image: Papa,
            },
            {
                id: "chorizo",
                name: "Chorizo",
                available: true,
                image: Chorizo,
            },
            {
                id: "frijol",
                name: "Frijol",
                available: true,
                image: Frijol,
            },
            {
                id: "queso",
                name: "Queso",
                available: true,
            },
            {
                id: "costilla",
                name: "Costilla",
                available: true,
                image: Costilla,
            }
        ]
    }
]