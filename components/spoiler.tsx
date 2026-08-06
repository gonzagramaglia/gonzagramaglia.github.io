'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Spoiler({ children }: { children: React.ReactNode }) {
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <div className={cn(
            "relative my-6 group rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden",
            "bg-zinc-50/50 dark:bg-zinc-900/50",
            "shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50"
        )}>
            <div
                onClick={() => setIsRevealed(true)}
                className={cn(
                    "transition-all duration-300",
                    !isRevealed && "blur-md select-none cursor-pointer opacity-50 hover:opacity-75"
                )}
                aria-hidden={!isRevealed}
            >
                <div className={cn(!isRevealed && "pointer-events-none")}>
                    {children}
                </div>
            </div>

            {!isRevealed && (
                <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                    onClick={() => setIsRevealed(true)}
                >
                    <span className="bg-zinc-900 text-zinc-50 px-4 py-2 rounded-full text-sm font-medium shadow-lg transform transition-transform group-hover:scale-105 hover:bg-black">
                        Show Solution
                    </span>
                </div>
            )}
        </div>
    )
}
