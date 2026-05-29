"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { getAssetPath } from "@/lib/paths"
import { cn } from "@/lib/utils"
import { navigation, isDropdown, type NavElement } from "@/data/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MobileNav } from "./mobile-nav"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHomePage
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent"
      )}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <nav className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src={getAssetPath("/logo2.svg")}
                alt="Vaagai Tamilsangam Logo"
                fill
                className="object-contain scale-[1.4]"
                loading="lazy"
              />
            </div>
            <span
              className={cn(
                "font-bold text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl transition-colors truncate max-w-[600px] sm:max-w-none leading-tight py-1",
                scrolled || !isHomePage ? "text-primary" : "text-white"
              )}
            >
              வாகை தமிழ்ச்சங்கம்
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 lg:gap-1 xl:gap-2">
            {navigation.map((item) => (
              <NavItem
                key={isDropdown(item) ? item.label : item.href}
                item={item}
                scrolled={scrolled}
                isHomePage={isHomePage}
                pathname={pathname}
              />
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileNav scrolled={scrolled} isHomePage={isHomePage} pathname={pathname} />
        </nav>
      </div>
    </header>
  )
}

const NavItem = React.memo(function NavItem({
  item,
  scrolled,
  isHomePage,
  pathname,
}: {
  item: NavElement
  scrolled: boolean
  isHomePage: boolean
  pathname: string
}) {
  const textColor = scrolled || !isHomePage ? "text-foreground" : "text-white"
  const hoverColor = scrolled || !isHomePage ? "hover:text-primary" : "hover:text-gold-light"

  if (isDropdown(item)) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-1 px-1.5 py-1 lg:px-2 lg:py-1 lg:text-xs xl:px-2.5 xl:py-1.5 xl:text-sm 2xl:px-3 2xl:py-2 2xl:text-base font-semibold rounded-md transition-colors outline-none whitespace-nowrap",
            textColor,
            hoverColor
          )}
        >
          {item.label}
          <ChevronDown className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="min-w-[240px] bg-popover/95 backdrop-blur-md"
        >
          {item.items.map((subItem, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link
                href={subItem.href}
                className={cn(
                  "w-full cursor-pointer",
                  pathname === subItem.href && "bg-primary/10 text-primary"
                )}
                {...(subItem.href.endsWith('.pdf') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {subItem.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={cn(
        "px-1.5 py-1 lg:px-2 lg:py-1 lg:text-xs xl:px-2.5 xl:py-1.5 xl:text-sm 2xl:px-3 2xl:py-2 2xl:text-base font-semibold rounded-md transition-colors whitespace-nowrap",
        textColor,
        hoverColor,
        isActive && (scrolled || !isHomePage ? "text-primary" : "text-gold")
      )}
    >
      {item.label}
    </Link>
  )
})
