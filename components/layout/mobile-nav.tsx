"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { getAssetPath } from "@/lib/paths"
import { cn } from "@/lib/utils"
import { navigation, isDropdown } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface MobileNavProps {
  scrolled: boolean
  isHomePage: boolean
  pathname: string
}

export function MobileNav({ scrolled, isHomePage, pathname }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "lg:hidden",
            scrolled || !isHomePage
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          )}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-4 border-b bg-primary/5">
          <SheetTitle className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-primary/20 overflow-hidden">
              <Image
                src={getAssetPath("/icon.svg")}
                alt="Vaagai Tamilsangam Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-primary font-semibold">வாகை தமிழ்ச்சங்கம்</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-4">
          {navigation.map((item) => {
            if (isDropdown(item)) {
              return (
                <Collapsible key={item.label} className="w-full">
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-2 px-3 text-sm rounded-md transition-colors",
                          pathname === subItem.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 px-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
