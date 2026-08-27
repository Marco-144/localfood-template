import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: ButtonVariant;
    className?: string;
    target?: string;
    rel?: string;
}

const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-black hover:bg-white",
    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black",
    ghost: "text-white/70 hover:text-white",
};

function Button({ children, href, variant = "primary", className = "", target, rel, }: ButtonProps) {
    const classes = `
        inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-button px-7 text-sm font-bold transition-all duration-300 active:scale-[0.98] sm:w-auto
        ${variants[variant]}
        ${className}
    `;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes}>
            {children}
        </button>
    );
}

export default Button;