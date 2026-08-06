"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../ModeToggle"
import { Menu, ArrowUpRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import Mark from "../Mark";
import { nav } from "@/lib/nav";


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8)
  })

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
          scrolled
            && "bg-background/85 backdrop-blur-md shadow-sm border-b"
            
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="ManazTech — home"
          >
            <Mark />
            <span className="text-lg font-semibold tracking-tight">
              Manaz<span className="text-primary">Tech</span>
            </span>
          </Link>

          {/* Primary nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 sm:flex"
          >
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.url}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex">
              <ModeToggle />
            </div>
              <Link href="#contact">
                <Button className="hidden sm:inline-flex group">
                    Get Started
                    <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  )
}

function MobileNav() {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open menu"/>}>
            <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="right" className="w-75 sm:w-87.5">
          <SheetHeader>
            <SheetTitle className="text-left">
              Manaz<span className="text-primary">Tech</span>
            </SheetTitle>
          </SheetHeader>
          <nav aria-label="Mobile primary" className="mt-6 flex flex-col gap-1 px-4">
            {nav.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
              >
                <Link
                  href={n.url}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <SheetFooter className="mt-auto flex-col gap-3 px-4 sm:flex-col">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ModeToggle />
            </div>
              <Link href="#contact">
                <Button className="w-full">
                    Get Started
                </Button>
              </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}