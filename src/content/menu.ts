import type { MenuCategory } from "../types/business";

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
            },
            {
                id: "chorizo",
                name: "Chorizo",
                available: true,
            },
            {
                id: "papa",
                name: "Papa",
                available: true,
            },
            {
                id: "frijol",
                name: "Frijol",
                available: true,
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
            }
        ]
    }
]