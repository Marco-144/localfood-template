import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

function Section({ children, id, className = "", }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative py-20 sm:py-28 lg:py-32 ${className}`} >
            {children}
        </section>
    );
}

export default Section;