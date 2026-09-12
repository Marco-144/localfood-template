import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import MenuItemCard from "../../components/cards/MenuItemCard";
import FloatingDecor from "../../components/decor/FloatingDecor";

import { menuCategories } from "../../content/menu";

const cardVariants = [
    "image",
    "split",
    "accent",
    "image",
    "minimal",
    "split",
] as const;

function Menu() {
    return (
        <Section
            id="menu"
            className="overflow-hidden bg-[#F5F5F5] text-black">

            <FloatingDecor items={[
                { icon: "chili", position: "left-[3%] top-[8%]", size: "w-10 sm:w-14", color: "text-primary/25", rotate: -12, hideOnMobile: true },
                { icon: "herb", position: "right-[6%] top-[4%]", size: "w-12 sm:w-16", color: "text-secondary/25", rotate: 10 },
                { icon: "ring", position: "right-[12%] top-[20.5%]", size: "w-16 sm:w-24", color: "text-black/10", hideOnMobile: true },
                { icon: "steam", position: "left-[8%] bottom-[6%]", size: "w-10 sm:w-14", color: "text-black/10", hideOnMobile: true },
            ]} />

            <Container>

                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Menú individual
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl">
                            Elige tus
                            <br />
                            favoritos
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
                            Tacos al vapor preparados para disfrutar en cualquier momento.
                        </motion.p>
                    </div>

                    {/* Scroll indicator */}
                    <div className="hidden items-center gap-3 pb-2 lg:flex">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                            Descubre
                        </span>

                        <span className="flex size-9 items-center justify-center rounded-full border border-black/10">
                            <ArrowDown size={14} />
                        </span>
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-16 space-y-20">

                    {menuCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: categoryIndex * 0.1 }}>

                            {/* Category header */}
                            <div className="mb-7 flex items-end justify-between border-b border-black/10 pb-4">
                                <div>
                                    <div className="mb-2 flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-secondary" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                                            Categoría
                                        </span>
                                    </div>

                                    <h3 className="font-display text-3xl uppercase sm:text-4xl">
                                        {category.name}
                                    </h3>

                                    {category.description && (
                                        <p className="mt-2 text-sm text-black/45">
                                            {category.description}
                                        </p>
                                    )}
                                </div>

                                <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-black/25 sm:block">
                                    {String(category.items.length).padStart(2, "0")}{" "}opciones
                                </span>
                            </div>

                            {/* Items */}
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                                {category.items.map((item, index) => {
                                    const variant = cardVariants[index] ?? "image";

                                    /**
                                     * En desktop:
                                     * image -> 2 columnas
                                     * split -> 2 columnas
                                     * accent -> 2 columnas
                                     * minimal -> 2 columnas
                                     * 
                                     * Esto permite que las tarjetas
                                     * tengan diferentes pesos visuales.
                                     */

                                    const gridClass = variant === "minimal"
                                        ? "lg:col-span-2"
                                        : "lg:col-span-2";

                                    return (
                                        <motion.div
                                            key={item.id}
                                            className={gridClass}
                                            initial={{ opacity: 0, y: 25 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{ delay: index * 0.06, duration: 0.45 }}>
                                            <MenuItemCard
                                                name={item.name}
                                                description={item.description}
                                                price={item.price}
                                                priceLabel={item.priceLabel}
                                                image={item.image}
                                                index={index}
                                                variant={variant} />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Decorative bottom accent */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-1/3 bg-primary" />

            <div className="pinter-events-none absolute bottom-0 right-0 h-1 w-1/5 bg-secondary" />
        </Section>
    );
}

export default Menu;