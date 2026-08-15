"use client";

import { Button } from "@/components/ui/button";
import { nav } from "@/lib/nav";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "../Mark";
import { ModeToggle } from "../ModeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        } ${pathname == "/get-started" && "sticky top-0 w-full"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="focus-visible:ring-ring flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="ManazTech — home"
              >
                <Mark />
                <span className="text-lg font-semibold tracking-tight">
                  Manaz<span className="text-primary">Tech</span>
                </span>
              </Link>
            </div>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 md:block lg:flex"
            >
              {nav.map((n) => (
                <Link key={n.label} href={n.url}>
                  <Button
                    size={"sm"}
                    variant={pathname == n.url ? "secondary" : "ghost"}
                  >
                    {n.label}
                  </Button>
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              {/* Actions */}
              <div className="hidden items-center gap-2 lg:flex">
                <div className="">
                  <ModeToggle />
                </div>
                <Link href="/get-started">
                  <Button className="group inline-flex">
                    Get Started
                    <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-accent transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="bg-background/90 border-border z-10 border-t py-2 backdrop-blur-md md:hidden">
            <nav
              aria-label="Mobile primary"
              className="mt-6 flex flex-col gap-1 px-4"
            >
              {nav.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    href={n.url}
                    className="text-foreground hover:bg-muted block rounded-md px-3 py-2.5 text-base font-medium"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <ModeToggle />
              <Link href="/get-started">
                <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  Get Started
                  <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
