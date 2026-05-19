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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src={getAssetPath("/icon.svg")}
                alt="Vaagai Tamilsangam Logo"
                fill
                className="object-contain p-0.5 md:p-1"
                priority
              />
            </div>
            <span
              className={cn(
                "font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl transition-colors truncate max-w-[600px] sm:max-w-none leading-tight py-1",
                scrolled || !isHomePage ? "text-primary" : "text-white"
              )}
            >
              வாகை தமிழ்ச்சங்கம்
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
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
            "flex items-center gap-1 px-2.5 py-2 text-sm xl:text-base font-semibold rounded-md transition-colors outline-none whitespace-nowrap",
            textColor,
            hoverColor
          )}
        >
          {item.label}
          <ChevronDown className="w-4 h-4" />
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
        "px-2.5 py-2 text-sm xl:text-base font-semibold rounded-md transition-colors whitespace-nowrap",
        textColor,
        hoverColor,
        isActive && (scrolled || !isHomePage ? "text-primary" : "text-gold")
      )}
    >
      {item.label}
    </Link>
  )
})
