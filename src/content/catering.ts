import type { Catering } from "../types/business";

export const catering: Catering = {
    title: "Servicio de Catering",

    description: "Llevamos nuestros tacos al vapor y complementos a tus eventos, reuniones y celebraciones.",

    buttonText: "Solicitar cotización",

    miniumOrder: 100,

    sections: [
        {
            id: "catering-tacos",
            name: "Tacos",
            description: "Elige entre nuestros tacos tradicionales.",
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
                },
            ],
        },

        {
            id: "complementos",
            name: "Complementos",
            description: "Acompañamientos para complementar tu servicio.",
            items: [
                {
                    id: "salsa-roja",
                    name: "Salsa Roja",
                    available: true,
                },
                {
                    id: "salsa-verde",
                    name: "Salsa Verde",
                    available: true,
                },
                {
                    id: "nopales",
                    name: "Nopales cocidos",
                    available: true,
                },
                {
                    id: "cebolla-caramelizada",
                    name: "Cebolla caramelizada",
                    available: true,
                },
                {
                    id: "chiles-toreados",
                    name: "Chiles toreados",
                    available: true,
                },
                {
                    id: "agua-sabor",
                    name: "Agua de sabor 20 Lt.",
                    available: true,
                },
                {
                    id: "ensalada",
                    name: "Ensalada",
                    available: true,
                },
            ],
        },
    ],

    includes: [
        "Cubiertos (tenedor y cuchillo)",
        "Servilletas",
        "Platos",
        "Vasos",
        "Saleros",
    ],
};