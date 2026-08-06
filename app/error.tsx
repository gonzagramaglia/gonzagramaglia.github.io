'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
                Try again
            </button>
        </div>
    )
}
