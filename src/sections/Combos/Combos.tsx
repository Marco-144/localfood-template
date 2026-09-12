import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import ComingSoon from "../../components/common/ComingSoon";
import FloatingDecor from "../../components/decor/FloatingDecor";

import { combos } from "../../content/combos";

function Combos() {
    return (
        <Section id="combos" className="overflow-hidden bg-white text-black">

            <FloatingDecor items={[
                { icon: "sparkle", position: "right-[8%] top-[6%]", size: "w-10 sm:w-14", color: "text-primary/30", hideOnMobile: true },
                { icon: "dish", position: "left-[4%] bottom-[10%]", size: "w-14 sm:w-20", color: "text-black/10" },
            ]} />

            <Container>
                <div className="mb-12 max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        Combos y paquetes
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl">
                        Algo bueno
                        <br />
                        se está cocinando
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {combos.map((combo) => (
                        <div key={combo.id}>
                            <ComingSoon
                                title={combo.name}
                                description={
                                    combo.description ??
                                    combo.items.join(" ° ")
                                }
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default Combos;