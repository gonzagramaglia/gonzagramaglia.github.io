'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'
import { XIcon, CopyIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
    PROJECTS,
    WORK_EXPERIENCE,
    EDUCATION,
    BLOG_POSTS,
} from '@/app/data'
import { ConnectSection } from '@/components/connect-section'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/i18n/translations'

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

/**
 * Props for the ProjectMedia component.
 */
export type ProjectMediaProps = {
    src?: string
    image?: string
    youtube?: string
}

/**
 * Component that displays a project's media, with support for morphing dialog interactions.
 * It can render an image, a video, or a YouTube embed.
 * @param props.src - Video source URL.
 * @param props.image - Image source URL.
 * @param props.youtube - YouTube embed URL.
 */
function ProjectMedia({ src, image, youtube }: ProjectMediaProps) {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
            }}
        >
            <MorphingDialogTrigger>
                {image ? (
                    <img
                        src={image}
                        alt="Project preview"
                        className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
                    />
                ) : youtube ? (
                    <img
                        src={`https://img.youtube.com/vi/${youtube}/maxresdefault.jpg`}
                        alt="Project preview"
                        className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
                    />
                ) : (
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        className="aspect-video w-full cursor-zoom-in rounded-xl"
                    />
                )}
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                    {image ? (
                        <img
                            src={image}
                            alt="Project preview"
                            className="aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
                        />
                    ) : youtube ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${youtube}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
                        ></iframe>
                    ) : (
                        <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
                        />
                    )}
                </MorphingDialogContent>
                <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                >
                    <XIcon className="h-5 w-5 text-zinc-500" />
                </MorphingDialogClose>
            </MorphingDialogContainer>
        </MorphingDialog>
    )
}

const MotionLink = motion.create(Link)

/**
 * Main component representing the landing page content.
 * It renders sections for About, Work Experience, Education, Blog Posts, and Projects.
 * It adapts content dynamically based on the globally selected language.
 */
export function HomeContent() {
    const { language } = useLanguage()
    const t = translations[language]

    useEffect(() => {
        if (window.location.search) {
            const newUrl = window.location.pathname + window.location.hash
            window.history.replaceState({}, '', newUrl)
        }
    }, [])

    return (
        <motion.main
            className="space-y-24 pt-0"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <div className="flex-1">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        <span dangerouslySetInnerHTML={{ __html: (t.about as any).bio }} />
                        <br />
                        <br />
                        <strong>{t.about.languagesLabel}:</strong> {t.about.spanishNative}, {t.about.english} (<strong><a
                            href="https://cert.efset.org/en/VNFN4x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-zinc-950 dark:hover:text-zinc-50"
                        >
                            {t.about.c1}
                        </a></strong>)
                    </p>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                id="work"
                className="scroll-mt-24 !mt-16"
            >
                <h3 className="mt-[-24px] mb-5 text-lg font-medium">{t.headers.workExperience}</h3>
                <div className="mb-[-24px] flex flex-col space-y-2">
                    {WORK_EXPERIENCE[language].map((job) => (
                        <MotionLink
                            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                            href={job.link}
                            key={job.id}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="absolute inset-0 mix-blend-overlay"
                                style={{
                                    background:
                                        'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)',
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{
                                    backgroundPosition: ['200% 0', '-200% 0'],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    repeatDelay: 2,
                                }}
                            />
                            <Spotlight
                                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                                size={64}
                            />
                            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                                <div className="relative flex w-full flex-row justify-between">
                                    <div>
                                        <h4 className="font-normal dark:text-zinc-100">
                                            {job.title}
                                        </h4>
                                        <p className="text-zinc-500 dark:text-zinc-400">
                                            {job.company}
                                        </p>
                                        {job.description && (
                                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                {job.description}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {job.start} - {job.end}
                                    </p>
                                </div>
                            </div>
                        </MotionLink>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="!mt-16"
            >
                <h3 className="mb-5 text-lg font-medium">{t.headers.selectedProjects}</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {PROJECTS[language].map((project) => (
                        <motion.div
                            key={project.name}
                            className="group relative space-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative z-10 rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                                <ProjectMedia
                                    src={project.video}
                                    image={project.image}
                                    youtube={project.youtube}
                                />
                            </div>
                            <div className="px-1">
                                <div className="font-base relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                                    {project.name}
                                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                                </div>
                                <p className="text-base text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                {project.github && (
                                    <a
                                        className="relative z-10 mt-2 flex items-center text-sm text-zinc-500 underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/ui/github.webp"
                                            alt="GitHub Logo"
                                            className="mr-2 h-4 w-4"
                                        />
                                        {t.githubLink}
                                    </a>
                                )}
                            </div>
                            <Link
                                href={project.link}
                                target="_blank"
                                className="absolute inset-0 z-0"
                            >
                                <span className="sr-only">View Project</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                id="education"
                className="scroll-mt-24"
            >
                <h3 className="mt-[-12px] mb-5 text-lg font-medium">{t.headers.education}</h3>
                <div className="mb-[-12px] flex flex-col space-y-2">
                    {EDUCATION[language].map((edu) => (
                        <Link
                            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                            href={edu.link}
                            key={edu.id}
                            target="_blank"
                        >
                            <Spotlight
                                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                                size={64}
                            />
                            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                                <div className="relative flex w-full flex-row justify-between">
                                    <div>
                                        <h4 className="font-normal dark:text-zinc-100">
                                            {edu.title}
                                        </h4>
                                        <p className="text-zinc-500 dark:text-zinc-400">
                                            {edu.company}
                                        </p>
                                        {edu.description && (
                                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                {edu.description}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {edu.start} - {edu.end}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                id="blog"
                className="scroll-mt-24"
            >
                <h3 className="mt-[-24px] mb-3 text-lg font-medium">{t.headers.blog}</h3>
                <div className="flex flex-col space-y-0">
                    <AnimatedBackground
                        enableHover
                        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.2,
                        }}
                    >
                        {BLOG_POSTS[language].map((post) => (
                            <MotionLink
                                key={post.uid}
                                className="-mx-3 rounded-xl px-3 py-3 relative overflow-hidden"
                                href={post.link}
                                data-id={post.uid}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    className="absolute inset-0 mix-blend-overlay"
                                    style={{
                                        background:
                                            'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)',
                                        backgroundSize: '200% 100%',
                                    }}
                                    animate={{
                                        backgroundPosition: ['200% 0', '-200% 0'],
                                        opacity: [0, 0.5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'linear',
                                        repeatDelay: 2,
                                    }}
                                />
                                <div className="flex flex-col space-y-1">
                                    <h4 className="font-normal dark:text-zinc-100">
                                        {post.title}
                                    </h4>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {post.description}
                                    </p>
                                </div>
                            </MotionLink>
                        ))}
                    </AnimatedBackground>
                </div>
            </motion.section>

            <ConnectSection />
        </motion.main>
    )
}
