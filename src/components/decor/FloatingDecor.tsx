import { motion } from "framer-motion";

import { DOODLES, type DoodleName } from "./FoodDoodles";

export interface DecorItem {
    // Nombre del doodle a usar
    icon: DoodleName;

    // Posición absoluta dentro del contenedor relativo de la sección.
    // Usa clases de Tailwind.
    position: string;

    // Ancho/alto del ícono.
    size?: string;

    color?: string;

    rotate?: number;

    // Oculta el ícono en pantallas pequeñas (recomendado para no saturar mobile).
    hideOnMobile?: boolean;
}

interface FloatingDecorProps {
    items: DecorItem[];
}

/**
 * FloatingDecor
 * ------------------------------------------------------------------
 * Dibuja un conjunto de doodles decorativos, flotando suavemente,
 * sobre cualquier sección. Pensado para plantillas: como no siempre
 * hay fotografía real del negocio, este componente rellena el
 * espacio "vacío" de una sección con elementos gráficos con
 * significado (chile, vapor, plato, hierbas, brillo, etc.) en vez
 * de dejar fondos planos.
 *
 * Uso:
 *   <div className="relative ...">
 *     <FloatingDecor items={[
 *       { icon: "chili", position: "left-[4%] top-[12%]", color: "text-primary/25" },
 *       { icon: "steam", position: "right-[8%] top-[30%]", color: "text-white/10" },
 *     ]} />
 *     ...contenido...
 *   </div>
 *
 * El contenedor padre debe tener `relative` (y usualmente
 * `overflow-hidden`) para que el posicionamiento absoluto funcione.
 * Todo el layer es `pointer-events-none` para no interferir con
 * clics/scroll.
 */
function FloatingDecor({ items }: FloatingDecorProps) {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {items.map((item, index) => {
                const Icon = DOODLES[item.icon];
                const sizeClass = item.size ?? "w-12 sm:w-16";
                const colorClass = item.color ?? "text-white/10";
                const visibilityClass = item.hideOnMobile ? "hidden sm:block" : "";

                return (
                    <motion.div
                        key={`${item.icon}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                        className={`absolute ${item.position} ${sizeClass} ${colorClass} ${visibilityClass}`}
                        style={{ rotate: item.rotate ?? 0 }}>
                        
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5 + (index % 3),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.4,
                            }}>
                            
                            <Icon className="h-full w-full" />
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default FloatingDecor;