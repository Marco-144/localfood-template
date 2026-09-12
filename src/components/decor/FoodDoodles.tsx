/**
 * FoodDoodles
 * -------------------------------
 * Set de ilustraciones decorativas en formato "line art", pensadas
 * como recursos genéricos para plantillas de negocio de comida.
 * 
 * Por qué existen:
 * Muchos negocios pequeños no cuentan con fotografía profesional del
 * producto. En vez de depender de fotos de stock (que no siempre
 * calzan con la marca, o generan licencias/uso que hay que revisar),
 * este set ofrece doodles vectoriales propios: heredan el color por
 * 'currentColor', así que se adaptan automáticamente a los colores
 * de cualquier marca que use la plantilla (primary / secondary /
 * white, etc. vía className="text-primary").
 * 
 * Todos comparten un mismo grosor de trazo ('strokeWidth=1.5') y 
 * 'viewBox' cuadrado para que se puedan mezlar sin verse
 * inconsistentes entre sí
 */

interface DoodleProps {
    className?: string;
}

export function SteamSwirl({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M20 54c6-4 6-9 0-13s-6-9 0-13 6-9 0-13"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round" />
            <path
                d="M34 54c6-4 6-9 0-13s-6-9 0-13 6-9 0-13"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6" />
            <path
                d="M48 54c6-4 6-9 0-13s-6-9 0-13 6-9 0-13"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.35" />
        </svg>
    );
}

export function ChiliPepper({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M24 10c2 4-2 6-2 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round" />
            <path
                d="M22 16c-3 6-14 10-14 24 0 9 7 16 16 16 12 0 22-13 22-27 0-8-6-13-11-13-4 0-8 3-8 6 0-6 4-9 4-9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round" />
            <path
                d="M16 40c0 7 5 12 12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5" /> 
        </svg>
    );
}

export function HerbSprig({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M32 56V20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round" />
            <path
                d="M32 20c0-8 8-12 14-12-2 8-6 12-14 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round" />
            <path
                d="M32 30c0-8-8-12-14-12 2 8 6 12 14 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round" />
            <path
                d="M32 42c0-8 8-12 14-12-2 8-6 12-14 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                opacity="0.6" />
        </svg>
    );
}

export function PlateDoodle({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">
            
            <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
    );
}

export function Sparkle({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <path
                d="M32 8c1.5 12 4 16.5 16 18-12 1.5-16.5 4-18 16-1.5-12-4-16.5-16-18 12-1.5 16.5-4 18-16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round" />
        </svg>
    );
}

export function ScanBracket({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <path d="M6 20V10a4 4 0 0 1 4-4h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M58 20V10a4 4 0 0 0-4-4H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M6 44v10a4 4 0 0 0 4 4h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M58 44v10a4 4 0 0 1-4 4H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

export function CircleRing({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
    );
}

/**
 * Ícono "genérico de platillo" usado como respaldo dentro de las
 * tarjetas de menú cuando un producto todavía no tiene foto. Está
 * pensado para verse bien a cualquier tamaño y no depender de una
 * ilustración específica de un tipo de comida.
 */
export function DishFallbackIcon({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">
                
            <ellipse cx="32" cy="46" rx="22" ry="6" stroke="currentColor" strokeWidth="2" opacity="0.5" />
            <path
                d="M14 30c0-9 8-18 18-18s18 9 18 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round" />
            <path d="M12 30h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M18 34c1 5 3 9 14 9s13-4 14-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
    );
}

export function SteamedTacoIcon({ className = "" }: DoodleProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg">
            {/* vapor */}
            <path d="M24 6c1.5 4-1.5 5-1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M32 4c1.5 4-1.5 5-1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 6c1.5 4-1.5 5-1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* concha (tortilla doblada) */}
            <path d="M10 34c0-11 10-20 22-20s22 9 22 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

            {/* relleno */}
            <path d="M14 34c2 3 6 4 18 4s16-1 18-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <circle cx="26" cy="31" r="1.6" fill="currentColor" opacity="0.6" />
            <circle cx="34" cy="29" r="1.6" fill="currentColor" opacity="0.6" />
            <circle cx="40" cy="32" r="1.6" fill="currentColor" opacity="0.6" />

            {/* plato */}
            <ellipse cx="32" cy="38" rx="26" ry="5" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        </svg>
    );
}

export const DOODLES = {
    steam: SteamSwirl,
    chili: ChiliPepper,
    herb: HerbSprig,
    plate: PlateDoodle,
    sparkle: Sparkle,
    scan: ScanBracket,
    ring: CircleRing,
    dish: DishFallbackIcon,
    taco: SteamedTacoIcon,
} as const;

export type DoodleName = keyof typeof DOODLES;