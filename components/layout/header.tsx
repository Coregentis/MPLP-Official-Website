"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, DOCS_URLS, REPO_URLS } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SearchButton } from "@/components/search/search-button";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-mplp-dark border-b border-mplp-border h-[60px]">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" aria-label="Main navigation">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" aria-label="MPLP Home">
                        <Logo className="h-7 w-auto" />
                    </Link>

                    {/* Desktop Navigation - Clean & Technical */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`px-3 py-1.5 text-[13px] font-medium transition-colors rounded ${isActive
                                        ? "text-mplp-blue-light bg-mplp-blue-soft/10"
                                        : "text-mplp-text-muted hover:text-mplp-text"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Secondary Navigation / Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <SearchButton />
                        <Link
                            href={DOCS_URLS.home}
                            className="text-[13px] font-medium text-mplp-text-muted hover:text-mplp-text transition-colors"
                        >
                            Docs
                        </Link>
                        <Button
                            href={REPO_URLS.root}
                            external
                            variant="secondary"
                            size="sm"
                            className="gap-2 h-8 text-[13px] border-mplp-border hover:bg-mplp-border/50"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-mplp-text-muted hover:text-mplp-text"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden py-4 border-t border-mplp-border bg-mplp-dark">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`block px-3 py-2 text-base font-medium transition-colors rounded ${isActive
                                        ? "text-mplp-blue-light bg-mplp-blue-soft/10"
                                        : "text-mplp-text-muted hover:text-mplp-text hover:bg-mplp-blue-soft/5"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>
        </header>
    );
}
