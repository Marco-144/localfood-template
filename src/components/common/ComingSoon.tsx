import { ArrowUpRight, Clock3 } from "lucide-react";
import type { ComingSoonProps } from "../../types/business";

function ComingSoon({
    eyebrow = "Próximamente",
    title,
    description,
    label = "Muy Pronto",
}: ComingSoonProps) {
    return (
        <div className="relative overflow-hidden rounded-card border border-white/10 bg-surface p-6 sm:p-8 lg:p-10">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[100px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-px w-1/2 bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                    <div className="mb-5 flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                            <Clock3 size={16} />
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            {eyebrow}
                        </span>
                    </div>

                    <h3 className="font-display text-4xl uppercase leading-[0.9] tracking-tight sm:text-5xl">
                        {title}
                    </h3>

                    {description && (
                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                            {description}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-3 lg:justify-end">
                    <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                        {label}
                    </span>

                    <ArrowUpRight size={20} className="text-white/20" /> 
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;