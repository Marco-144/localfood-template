import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/buttons/Button";

import { catering } from "../../content/catering";
import { contact } from "../../content/contact";

function Catering() {
    const whatsappUrl = contact.whatsapp
        ? `https://wa.me/${contact.whatsapp}`
        : "#contacto";

    return (
        <Section id="catering" className="bg-background">
            <Container>
                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Para tus eventos
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
                            {catering.title}
                        </motion.h2>

                        {catering.miniumOrder && (
                            <div className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
                                <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                                Catering disponible para pedidos mayores a{" "}
                                {catering.miniumOrder} tacos
                                </span>
                            </div>
                        )}
                    </div>

                    <p className="max-w-lg text-base leading-7 text-white/50 lg:justify-self-end lg:text-lg">
                        {catering.description}
                    </p>
                </div>

                {/* Catering sections */}
                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {catering.sections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: sectionIndex * 0.1 }}>
                            <div className="mb-6 flex items-end justify-between gap-4">
                                <div>
                                    <h3 className="font-display text-3xl uppercase">
                                        {section.name}
                                    </h3>

                                    {section.description && (
                                        <p className="mt-2 text-sm text-white/40">
                                            {section.description}
                                        </p>
                                    )}
                                </div>

                                <span className="text-xs font-bold text-white/25">
                                    {String(section.items.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="divide-y divide-white/10 border-y border-white/10">
                                {section.items.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between gap-4 py-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold text-white/25">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-semibold text-white/85">
                                                {item.name}
                                            </span>
                                        </div>

                                        <span className="size-2 rounded-full bg-secondary" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Incluides */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-card border border-white/10 bg-surface p-6 sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Incluido
                            </p>

                            <h3 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
                                Todo listo
                            </h3>

                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                                Tu servicio de catering incluye lo necesario
                                para que tus invitados disfruten.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {catering.includes.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4">
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                                        <Check size={15} />
                                    </span>

                                    <span className="text-sm font-medium text-white/75">
                                        {item}
                                    </span> 
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <div className="mt-10 flex justify-center">
                    <Button
                        href={whatsappUrl}
                        target={contact.whatsapp ? "_blank" : undefined}
                        rel={contact.whatsapp ? "noreferrer" : undefined}>
                        <MessageCircle size={17} />
                        {catering.buttonText}
                    </Button>
                </div>
            </Container>
        </Section>
    );
}

export default Catering;