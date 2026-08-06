'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { WORK_EXPERIENCE_ES } from '@/app/data'
import { usePathname } from 'next/navigation'
import { ConnectSection } from '@/components/connect-section'

function CopyButton() {
    const [text, setText] = useState('Copiar')
    const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

    useEffect(() => {
        setTimeout(() => {
            setText('Copiar')
        }, 2000)
    }, [text])

    return (
        <button
            onClick={() => {
                setText('Copiado')
                navigator.clipboard.writeText(currentUrl)
            }}
            className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50 cursor-pointer"
            type="button"
        >
            <TextMorph>{text}</TextMorph>
            <span>URL</span>
        </button>
    )
}

export default function LayoutWork({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const work = WORK_EXPERIENCE_ES.find((w) => w.link === pathname)
    const workTitle = work ? work.title : ''

    return (
        <>
            <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
            <ScrollProgress
                className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
                springOptions={{
                    bounce: 0,
                }}
            />

            <div className="flex flex-col">
                <div className="relative flex justify-between items-center w-full">
                    <Link 
                        href="/es/#work" 
                        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50 underline z-10"
                    >
                        ← Volver a Experiencia
                    </Link>
                    <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                        <span className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                            {workTitle}
                        </span>
                    </div>
                    <div className="z-10">
                        <CopyButton />
                    </div>
                </div>
                <main className="prose prose-gray mt-8 pb-0 prose-h4:prose-base dark:prose-invert prose-h1:hidden prose-h2:mt-12 [&>h2:first-of-type]:mt-0 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
                    {children}
                </main>
                <div className="relative flex justify-between items-center w-full mt-12 mb-8">
                    <Link 
                        href="/es/#work" 
                        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50 underline z-10"
                    >
                        ← Volver a Experiencia
                    </Link>
                    <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                        <span className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                            {workTitle}
                        </span>
                    </div>
                    <div className="z-10">
                        <CopyButton />
                    </div>
                </div>
                <ConnectSection />
            </div>
        </>
    )
}
