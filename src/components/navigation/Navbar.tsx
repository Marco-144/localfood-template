import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Container from "../common/Container";
import { brand } from "../../content/brand";
import { social } from "../../content/social";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <Container>
                <nav className="flex h-20 items-center justify-between sm:h-24">

                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={closeMenu}
                        className="relative z-10 flex items-center"
                        aria-label={brand.name}>

                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-11 w-auto object-contain sm:h-12" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#inicio"
                            className="text-sm font-medium text-white/60 trasition-colors hover:text-white">
                            Inicio
                        </a>

                        <a
                            href="#menu"
                            className="text-sm font-medium text-white/60 trasition-colors hover:text-white">
                            Menú
                        </a>

                        <a
                            href="#catering"
                            className="text-sm font-medium text-white/60 transition-colors hover:text-white">
                            Catering
                        </a>

                        <a
                            href="#contacto"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-white">
                            Contacto
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    {/* Mobile trigger */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((value) => !value)}
                        className="relative z-10 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
                        aria-label={
                            isOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={isOpen}>
                        {isOpen ? (
                            <X size={21} />
                        ) : (
                            <Menu size={21} />
                        )}
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <div
                className={`absolute inset-x-0 top-0 -z-0 min-h-screen bg-background/95 px-5 pt-28 backdrop-blur-xl transition-all duration-300 md:hidden 
                ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}>
                <Container className="px-0">
                    <div className="flex flex-col">
                        <a
                            href="#inicio"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-6 text-4xl font-black uppercase tracking-tight">
                            Inicio
                        </a>

                        <a
                            href="#menu"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-6 text-4xl font-black uppercase tracking-tight">
                            Menú
                        </a>

                        <a
                            href="#catering"
                            onClick={closeMenu}
                            className="border-b border-white/10 py-6 text-4xl font-black uppercase tracking-tight">
                            Catering
                        </a>

                        <a
                            href="#contacto"
                            onClick={closeMenu}
                            className="flex items-center gap-3 py-6 text-4xl font-black uppercase tracking-tight">
                            Contacto

                            <ArrowUpRight
                                size={30}
                                className="text-primary" />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-4">
                        {social.instagram && (
                            <a
                                href={social.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white hover:text-black"
                                aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        )}
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Navbar;