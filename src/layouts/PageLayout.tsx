import type { ReactNode } from "react";
import Navbar from "../components/navigation/Navbar";

interface PageLayoutProps {
    children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-white antialiased">
            <Navbar />

            <main className="overflow-hidden">
                {children}
            </main>
        </div>
    );
}

export default PageLayout;