import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PositioningNotice } from "@/components/ui/positioning-notice";

interface ShellProps {
    children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
    return (
        <div className="flex min-h-screen flex-col bg-mplp-dark text-mplp-text selection:bg-mplp-blue-soft selection:text-white">
            <Header />
            <main className="flex-1">{children}</main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
                <PositioningNotice variant="inline" />
            </div>
            <Footer />
        </div>
    );
}
