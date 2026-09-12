import { Check, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/buttons/Button";
import FloatingDecor from "../../components/decor/FloatingDecor";

import { catering } from "../../content/catering";
import { contact } from "../../content/contact";

function Catering() {
    const whatsappUrl = contact.whatsapp
        ? `https://wa.me/${contact.whatsapp}`
        : "#contacto";

    return (
        <Section id="catering" className="overflow-hidden bg-background">
            
            <FloatingDecor items={[
                { icon: "herb", position: "right-[4%] top-[10%]", size: "w-12 sm:w-16", color: "text-secondary/20", rotate: 8, hideOnMobile: true },
                { icon: "ring", position: "left-[2%] bottom-[8%]", size: "w-20 sm:w-28", color: "text-white/[0.05]" },
            ]} />
            
            <Container> 

                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
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
                            className="font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl">
                            {catering.title}
                        </motion.h2>
                    </div>
                    
                    <div className="lg:justify-self-end">

                        <p className="max-w-lg text-base leading-7 text-white/50 lg:text-lg">
                            {catering.description}
                        </p>

                        {catering.miniumOrder && (
                            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2.5">
                            
                                <Users size={14} className="text-primary" />

                                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                                    Pedidos mayores a {catering.miniumOrder} tacos
                                </span>
                            </div>
                        )}
                    </div>

                </div>

                {/* Catering sections */}
                <div className="mt-16 grid gap-5 lg:grid-cols-2">

                    {catering.sections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: sectionIndex * 0.1 }}
                            className="rounded-card border border-white/10 bg-surface p-5 sm:p-7">

                            <div className="mb-6 flex items-start justify-between">

                                <div>

                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                                        {String(sectionIndex + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="font-display text-3xl uppercase">
                                        {section.name}
                                    </h3>

                                    {section.description && (
                                        <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
                                            {section.description}
                                        </p>
                                    )}

                                </div>

                                <span className="text-xs font-bold text-white/20">
                                    {String(section.items.length).padStart(2, "0")}
                                </span>
                            </div>      

                            <div className="divide-y divide-white/10 border-y border-white/10">
                                {section.items.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between gap-4 py-4">

                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold text-white/20">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="text-sm font-semibold text-white/75">
                                                {item.name}
                                            </span>
                                        </div>

                                        <span className="size-1.5 rounded-full bg-secondary" />
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
                    className="mt-5 rounded-card border border-white/10 bg-surface p-6 sm:p-8">

                    <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-center">

                        <div>

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                                Incluido en el servicio
                            </p>

                            <h3 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
                                Todo listo
                            </h3>

                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                                Nos encargamos de que tu evento tenga lo necesario para disfrutar el serivicio
                            </p>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                            {catering.includes.map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex 
                                        items-center 
                                        gap-3 
                                        rounded-xl 
                                        border 
                                        border-white/5 
                                        bg-white/[0.025] 
                                        p-3.5">

                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                        <Check size={14} />
                                    </span>

                                    <span className="text-sm text-white/65">
                                        {item}
                                    </span> 
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                {contact.whatsapp && (
                    <div className="mt-10 flex justify-center">
                        <Button
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer">
                                
                            <MessageCircle size={17} />
                            {catering.buttonText}
                        </Button>
                    </div>
                    
                )}
            </Container>
        </Section>
    );
}

export default Catering;