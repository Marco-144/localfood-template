export interface Brand {
    name: string;
    displayName: string;
    slogan: string;
    description: string;

    logo: string;

    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
    };
}

export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price?: number;
    priceLabel?: string;
    image?: string;
    available: boolean;
}

export interface MenuCategory {
    id: string;
    name: string;
    description?: string;
    items: MenuItem[];
}

export interface CateringSection {
    id: string;
    name: string;
    description?: string;
    items: MenuItem[];
}

export interface Catering {
    title: string;
    description: string;
    buttonText: string;

    miniumOrder?: number;

    sections: CateringSection[];

    includes: string[];
}

export interface Combo {
    id: string;
    name: string;
    description?: string;

    price?: number;
    priceLabel?: string;

    image?: string;

    items: string[];
    available: boolean;
}

export interface Contact {
    phone: string;
    whatsapp: string;

    email?: string;
    address?: string;
    schedule?: string;
}

export interface Social {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    website?: string;
}

export interface ComingSoonProps {
    eyebrow?: string;
    title: string;
    description?: string;
    label?: string;
}
