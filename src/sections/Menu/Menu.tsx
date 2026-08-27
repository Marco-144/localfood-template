import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import MenuItemCard from "../../components/cards/MenuItemCard";

import { menuCategories } from "../../content/menu";

function Menu() {
    return (
        <Section
            id="menu"
            className="bg-white text-black">
            <Container>
                {/* Header */}
                <div className="mb-14 max-w-3xl">
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
                        className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
                        Elige tus
                        <br/>
                        favoritos
                    </motion.h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
                        Tacos al vapor estilo Jalisco, preparados para disfrutar en cualquier momento.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-14">

                    {menuCategories.map((category) => (
                        <div key={category.id}>
                            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <h3 className="font-display text-3xl uppercase sm:text-4xl">
                                        {category.name}
                                    </h3>

                                    {category.description && (
                                        <p className="mt-2 text-sm text-black/50">
                                            {category.description}
                                        </p>
                                    )}
                                </div>

                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/30">
                                    {category.items.length} opciones
                                </span>
                            </div>   

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {category.items.map((item, index) => (
                                    <MenuItemCard
                                        key={item.id}
                                        name={item.name}
                                        description={item.description}
                                        index={index}
                                    />
                                ))}  
                            </div>                       
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default Menu;