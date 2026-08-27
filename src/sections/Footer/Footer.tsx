import { ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import Container from "../../components/common/Container";

import { brand } from "../../content/brand";
import { social } from "../../content/social";

function Footer() {
    return (
        <footer className="bg-background">
            <Container>
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                        {/* Brand */}
                        <div className="flex items-center gap-4">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-12 w-auto object-contain mix-blend-screen" />

                            <div>
                                <p className="font-bold text-white">
                                    {brand.name}
                                </p>

                                <p className="mt-1 text-xs text-white/35">
                                    {brand.slogan}
                                </p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#inicio"
                                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                                aria-label="Volver al inicio">
                                <ArrowUp size={17} />
                            </a>

                            {social.instagram && (
                                <a
                                    href={social.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-black"
                                    aria-label="Instagram">
                                    <FaInstagram size={17} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            &copy; {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
                        </p>

                        <p>
                            Estilo Jalisco
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;