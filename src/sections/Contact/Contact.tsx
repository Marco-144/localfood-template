import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/buttons/Button";

import { brand } from "../../content/brand";
import { contact } from "../../content/contact";
import { social } from "../../content/social";

function Contact() {
    const whatsappUrl = contact.whatsapp
        ? `https://wa.me/${contact.whatsapp}`
        : "#";

    return (
        <Section id="contact" className="bg-white text-black">
            <Container>
                <div className="relative overflow-hidden rounded-card bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/15 blur-[100px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-secondary/10 blur-[120px]" />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div className="max-w-3xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                ¿Listo para ordenar?
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
                                Lleva nuestros
                                <br />
                                tacos a tu evento.
                            </motion.h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
                                {brand.name} está listo para acompañar tus
                                reuniones, celebraciones y eventos.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            {contact.whatsapp && (
                                <Button
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer">
                                    <MessageCircle size={17} />
                                    Whatsapp
                                </Button>
                            )}

                            {social.instagram && (
                                <Button
                                    href={social.instagram}
                                    variant="secondary"
                                    target="_blank"
                                    rel="noreferrer">
                                    <FaInstagram size={17} />
                                    Instagram

                                    <ArrowUpRight size={16} />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Contact;