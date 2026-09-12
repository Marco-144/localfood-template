import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { SteamedTacoIcon  , Sparkle } from "../decor/FoodDoodles";

type CardVariant = "image" | "split" | "accent" | "minimal";

interface MenuItemCardProps {
    name: string;
    index: number;
    description?: string;
    price?: number;
    priceLabel?: string;
    image?: string;
    variant: CardVariant;
}

/**
 * Fondo de respaldo usado en TODAS las variantes cuando el
 * producto no tiene foto todavía.
 *
 * Importante para la plantilla: muchos negocios que la usen no
 * tendrán fotografía propia del producto al inicio. En vez de dejar
 * un espacio vacío (o forzar una foto de stock que no calce con la
 * marca), mostramos un ícono temático sobre un degradado con los
 * colores de marca. Así ninguna tarjeta se ve "rota" o incompleta,
 * sin importar cuántas fotos existan.
 *
 * `SteamedTacoIcon` es específico de este negocio (tacos al vapor).
 * Para otro tipo de negocio en la plantilla, basta con cambiar este
 * import por otro doodle de `FoodDoodles.tsx` (o uno nuevo).
 */
function FallbackArt({ tone = "dark" }: { tone?: "dark" | "light" }) {
    return (
        <div
            className={`
                absolute inset-0 flex items-center justify-center
                bg-linear-to-br
                ${tone === "dark"
                    ? "from-primary/15 via-transparent to-secondary/15"
                    : "from-primary/25 via-primary/5 to-secondary/20"}
            `}>
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <SteamedTacoIcon
                    className={`h-16 w-16 sm:h-20 sm:w-20 ${tone === "dark" ? "text-white/15" : "text-black/15"}`} />
            </motion.div>
        </div>
    );
}

/**
 * Etiqueta de precio en forma de "flag" / ribbon, con una muesca
 * triangular en el borde izquierdo. Se usa en las variantes
 * `image` y `split` en vez de una simple píldora, para que el
 * precio se lea como un tag de menú real y no compita visualmente
 * con la foto.
 */
function PriceFlag({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
    return (
        <span
            className={`
                relative flex items-center py-1.5 pl-4 pr-3 text-xs font-bold
                ${tone === "light" ? "bg-white text-black" : "bg-black text-white"}
            `}
            style={{ clipPath: "polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)" }}>
            {text}
        </span>
    );
}

function MenuItemCard({ name, index, description, price, priceLabel, image, variant = "image" }: MenuItemCardProps) {
    const priceText = priceLabel ??
        (price !== undefined
            ? `$${price.toLocaleString("es-MX")}`
            : undefined
        );

    const hasImage = Boolean(image);

    /**
     * ------------------
     * VARIANT: SPLIT  ("diagonal")
     * ------------------
     * Rediseño completo. La foto (o el respaldo temático) ocupa
     * toda la tarjeta de fondo, y un panel oscuro con corte
     * diagonal (clip-path) cubre parte izquierda con el contenido.
     * Un filo de color acompaña el corte para un remate más
     * cuidado. Funciona igual de bien con o sin imagen real.
     */

    if (variant === "split") {
        const panelClip = "polygon(0 0, 100% 0, 76% 100%, 0% 100%)";
        const edgeClip = "polygon(98.5% 0, 100% 0, 76% 100%, 74.5% 100%)";

        return (
            <article className="
                group
                relative
                min-h-72
                overflow-hidden
                rounded-card
                bg-black
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-soft
                sm:min-h-80">

                {/* Fondo: foto o respaldo temático */}
                <div className="absolute inset-0">
                    {hasImage ? (
                        <motion.img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover"
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
                    ) : (
                        <FallbackArt tone="dark" />
                    )}
                    <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Filo de color junto al corte diagonal */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-[68%] bg-primary sm:w-[58%]"
                    style={{ clipPath: edgeClip }} />

                {/* Panel diagonal con el contenido */}
                <div
                    className="
                        absolute inset-y-0 left-0 flex
                        w-[68%] flex-col justify-between
                        bg-black/85 p-5 backdrop-blur-sm
                        sm:w-[58%] sm:p-6"
                    style={{ clipPath: panelClip }}>

                    <div className="flex items-start justify-between pr-6">
                        <span className="
                            flex
                            size-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            text-[10px]
                            font-bold
                            tracking-wider
                            text-white/40">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="pr-6">
                        {priceText && (
                            <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-black">
                                {priceText}
                            </span>
                        )}

                        <h3 className="
                            font-display
                            text-2xl
                            uppercase
                            leading-[0.9]
                            tracking-tight
                            sm:text-3xl">
                            {name}
                        </h3>

                        {description && (
                            <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/45">
                                {description}
                            </p>
                        )}

                        <span className="
                            mt-4
                            flex
                            size-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            text-white/30
                            transition-all
                            duration-300
                            group-hover:border-primary
                            group-hover:bg-primary
                            group-hover:text-black">
                            <ArrowUpRight size={16} />
                        </span>
                    </div>
                </div>
            </article>
        );
    }

    /**
     * ------------------
     * VARIANT: ACCENT
     * ------------------
     * La foto (cuando existe) se muestra como una insignia circular
     * y el precio cuelga de su borde inferior izquierdo, como una
     * calcomanía — así nunca compite con la esquina donde vive el
     * número de la tarjeta. Sin imagen, el precio regresa a la fila
     * superior como píldora normal.
     */
    if (variant === "accent") {
        return (
            <article className="
                group
                relative
                min-h-72
                overflow-hidden
                rounded-card
                bg-primary
                text-black
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-soft
                sm:min-h-80">

                {/* Graphic circle */}
                <div className="
                    pointer-events-none
                    absolute
                    -right-24
                    -bottom-24
                    size-64
                    rounded-full
                    border-[24px]
                    border-black/10
                    transition-transform
                    duration-700
                    group-hover:scale-110" />

                {/* Insignia de foto + precio en forma de calcomanía */}
                {hasImage && (
                    <motion.div
                        className="pointer-events-none absolute -right-4 -top-4 sm:-right-6 sm:-top-6"
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                        <div className="relative">
                            <div className="
                                size-28
                                overflow-hidden
                                rounded-full
                                border-4
                                border-black/10
                                opacity-90
                                transition-transform
                                duration-700
                                group-hover:scale-105
                                sm:size-36">
                                <img
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover" />
                            </div>

                            {priceText && (
                                <span className="
                                    absolute
                                    -bottom-2
                                    -left-3
                                    rounded-full
                                    bg-black
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-bold
                                    text-white
                                    shadow-soft">
                                    {priceText}
                                </span>
                            )}
                        </div>
                    </motion.div>
                )}

                <div className="relative flex min-h-72 flex-col justify-between p-5 sm:min-h-80 sm:p-6">
                    <div className="flex items-start justify-between">
                        <span className="
                            flex
                            size-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-black/20
                            text-[10px]
                            font-bold
                            tracking-wider">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {!hasImage && priceText && (
                            <span className="
                                rounded-full
                                bg-black
                                px-3
                                py-1.5
                                text-xs
                                font-bold
                                text-white">
                                {priceText}
                            </span>
                        )}
                    </div>

                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h3 className="
                                font-display
                                text-3xl
                                uppercase
                                leading-[0.88]
                                tracking-tight
                                sm:text-4xl">
                                {name}
                            </h3>

                            {description && (
                                <p className="mt-3 max-w-xs text-sm leading-5 text-black/60">
                                    {description}
                                </p>
                            )}
                        </div>

                        <span className="
                            flex
                            size-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            text-white
                            transition-transform
                            duration-300
                            group-hover:rotate-45">
                            <ArrowUpRight size={17} />
                        </span>
                    </div>
                </div>
            </article>
        );
    }

    /**
     * ------------------
     * VARIANT: MINIMAL
     * ------------------
     * Animaciones ahora "ambient": corren solas (no dependen de
     * :hover), porque en celular no existe hover — es la variante
     * que más se ve en mobile y merece vida propia sin necesitar un
     * tap sostenido.
     */

    if (variant === "minimal") {
        return (
            <article className="
                group
                relative
                flex
                min-h-64
                overflow-hidden
                rounded-card
                border
                border-black/10
                bg-white
                p-5
                text-black
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-soft
                sm:min-h-72
                sm:p-6">

                {/* Watermark decorativo, siempre presente y con vida propia */}
                <motion.div
                    className="pointer-events-none absolute -right-6 -top-6 size-28 text-primary/20 sm:size-32"
                    animate={{ rotate: [-6, 10, -6], scale: [1, 1.08, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                    <Sparkle className="h-full w-full" />
                </motion.div>

                {/* Segundo acento pequeño, aparece con delay para dar profundidad */}
                <motion.div
                    className="pointer-events-none absolute right-10 top-10 size-3 text-secondary/40 sm:right-14 sm:top-12"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                    <Sparkle className="h-full w-full" />
                </motion.div>

                <div className="relative flex w-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <span className="
                            text-[10px]
                            font-bold
                            tracking-[0.2em]
                            text-black/30" >
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {priceText && (
                            <span className="text-xs font-bold text-primary">
                                {priceText}
                            </span>
                        )}
                    </div>

                    <div>
                        <motion.div
                            className="mb-5 h-1 bg-secondary"
                            initial={{ width: 16 }}
                            whileInView={{ width: 40 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }} />

                        <h3 className="
                            font-display
                            text-3xl
                            uppercase
                            leading-[0.9]
                            tracking-tight">
                            {name}
                        </h3>

                        {description && (
                            <p className="mt-3 max-w-xs text-sm leading-6 text-black/45">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                <motion.span
                    className="
                        absolute
                        bottom-5
                        right-5
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/10
                        text-black/30
                        transition-colors
                        duration-300
                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-black"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowUpRight size={16} />
                </motion.span>
            </article>
        );
    }

    /**
     * ------------------
     * VARIANT: IMAGE
     * ------------------
     * Zoom ambient continuo en la foto (visible también en
     * celular, sin depender de hover) y precio en formato "flag" en
     * vez de píldora simple, para que se lea como una etiqueta de
     * menú real.
     */

    return (
        <article className="
            group 
            relative 
            min-h-72
            overflow-hidden 
            rounded-card 
            bg-black
            text-white 
            transition-all 
            duration-500 
            hover:-translate-y-1 
            hover:shadow-soft
            sm:min-h-80">

            {/* Image */}
            {hasImage ? (
                <div className="absolute inset-0">
                    <motion.img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                        animate={{ scale: [1, 1.07, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent" />
                </div>
            ) : (
                <FallbackArt tone="dark" />
            )}

            {/* Filo decorativo inferior, marca de la variante */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/5 bg-primary opacity-80" />

            {/* Content */}
            <div className="relative flex min-h-72 flex-col justify-between p-5 sm:min-h-80 sm:p-6">

                {/* Top */}
                <div className="flex items-start justify-between">
                    <span className="
                        flex 
                        size-9 
                        items-center 
                        justify-center 
                        rounded-full 
                        border 
                        border-white/15
                        bg-black/10 
                        text-[10px] 
                        font-bold
                        tracking-wider 
                        text-white/60
                        backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {priceText && <PriceFlag text={priceText} tone="light" />}
                </div>

                {/* Bottom */}
                <div>
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h3 className="font-display text-3xl uppercase leading-[0.88] tracking-tight sm:text-4xl">
                                {name}
                            </h3>

                            {description && (
                                <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                                    {description}
                                </p>
                            )}
                        </div>

                        <span className="
                            flex
                            size-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/15
                            text-white/40
                            transition-all
                            duration-300
                            group-hover:border-primary
                            group-hover:bg-primary
                            group-hover:text-black">
                            <ArrowUpRight size={17} />
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MenuItemCard;
