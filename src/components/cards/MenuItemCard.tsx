interface MenuItemCardProps {
    name: string;
    index: number;
    description?: string;
}

function MenuItemCard({ name, index, description }: MenuItemCardProps) {
    return (
        <article className="group relative overflow-hidden rounded-card border border-black/10 bg-black p-5 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-6">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex min-h-32 flex-col justify-between gap-8">
                <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-bold text-white/40">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                    <h3 className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
                        {name}
                    </h3>

                    {description && (
                        <p className="mt-2 text-sm leading-6 text-white/50">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}

export default MenuItemCard;