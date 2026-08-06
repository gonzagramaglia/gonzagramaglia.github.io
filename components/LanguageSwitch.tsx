'use client'

import { useLanguage } from '@/app/context/LanguageContext'
import { motion } from 'motion/react'

export function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex h-8 w-16 items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-800 cursor-pointer"
            aria-label="Toggle language"
        >
            <motion.div
                className="h-6 w-6 rounded-full bg-white shadow-sm dark:bg-zinc-600"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                animate={{
                    x: language === 'en' ? 0 : 32,
                }}
            />
            <span className="absolute left-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                EN
            </span>
            <span className="absolute right-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                ES
            </span>
        </button>
    )
}
