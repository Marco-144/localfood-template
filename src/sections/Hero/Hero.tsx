import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../../components/common/Container";
import Button from "../../components/buttons/Button";
import FloatingDecor from "../../components/decor/FloatingDecor";

import { brand } from "../../content/brand";
import { social } from "../../content/social";
import { contact } from "../../content/contact";

function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen overflow-hidden bg-background">

            {/* Ambient light */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-[35%] h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] sm:h-125 sm:w-125" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50" />
            </div>

            <FloatingDecor items={[
                { icon: "chili", position: "left-[6%] top-[22%]", size: "w-12 sm:w-16", color: "text-primary/25", rotate: -15, hideOnMobile: true },
                { icon: "sparkle", position: "right-[10%] top-[16%]", size: "w-8 sm:w-10", color: "text-white/25" },
                { icon: "herb", position: "right-[6%] bottom-[18%]", size: "w-12 sm:w-16", color: "text-secondary/25", rotate: 12, hideOnMobile: true },
            ]} />

            <Container className="realtive z-10">
                <div className="flex min-h-screen flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-32 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-1 mx-auto w-full max-w-72 sm:max-w-80 lg:order-2 lg:max-w-xl">
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute left-1/2 top-1/2 size-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

                            {/* Rings */}
                            <div className="absolute left-1/2 top-1/2 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

                            <div className="absolute left-1/2 top-1/2 aspect-square w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="relative z-10 mx-auto w-full object-contain mix-blend-screen" />

                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="order-2 mt-8 text-center lg:order-1 lg:mt-0 lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-primary sm:text-sm">
                            {brand.slogan}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="font-display text-[clamp(3.8rem,15vw,8rem)] uppercase leading-[0.8] tracking-[-0.06em]">
                            {brand.displayName}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="mx-auto mt-8 max-w-lg text-base leading-7 text-white/60 sm:text-lg lg:mx-0">
                            {brand.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row lg:mx-0">
                            <Button href="#menu">
                                Ver menú
                                <ArrowDown size={17} />
                            </Button>

                            <Button href="#catering" variant="secondary">
                                Catering
                                <ArrowUpRight size={17} />
                            </Button>
                        </motion.div>

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-8 flex justify-center gap-3 lg:justify-start">

                            {social.instagram && (
                                <a
                                    href={social.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                                    aria-label="Instagram">
                                    <FaInstagram size={18} />
                                </a>
                            )}

                            {contact.whatsapp && (
                                <a
                                    href={`https://wa.me/${contact.whatsapp}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-black"
                                    aria-label="WhatsApp">
                                    <MessageCircle size={18} />
                                </a>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.a
                    href="#menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 transition-colors hover:text-white md:flex">
                    Scroll

                    <ArrowDown
                        size={15}
                        className="animate-bounce"
                    />
                </motion.a>
            </Container>
        </section>
    );
}

export default Hero;