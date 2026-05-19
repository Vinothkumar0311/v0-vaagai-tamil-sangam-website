"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { navigation } from "@/data/navigation"

interface MobileNavProps {
  onClose: () => void
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="fixed inset-0 top-16 z-40 bg-white border-t border-border md:hidden">
      <div className="max-w-md mx-auto px-4 py-4 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
        {navigation.map((item) => {
          if (item.submenu) {
            return (
              <Collapsible key={item.path}>
                <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1 mt-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.path}
                      href={subitem.path}
                      onClick={onClose}
                      className="block px-3 py-2 text-sm text-text-secondary hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
