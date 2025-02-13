// app/providers.tsx

import {HeroUIProvider} from '@heroui/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <main className="dark text-foreground bg-background">

      {children}
      </main>
    </HeroUIProvider>
  )
}