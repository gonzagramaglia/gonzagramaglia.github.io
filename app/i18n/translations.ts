/**
 * Localized translations for the portfolio.
 */
export const translations = {
    en: {
        role: 'Full Stack Developer | Systems Reliability & Security',
        about: {
            bio: '<strong>Full Stack Developer</strong> dedicated to building <strong>scalable web applications</strong> and engaging user experiences. Currently pursuing a degree in <strong>Cyberdefense</strong>, I bring a unique <strong>security-first mindset</strong> to modern web development. From designing intuitive frontends to architecting resilient backends, I deliver <strong>fast, secure, and production-ready</strong> products. In my free time, my hobby is solving labs on <a href="https://tryhackme.com/p/ciberportero" target="_blank" rel="noopener noreferrer" class="underline hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">TryHackMe</a>.',
            languagesLabel: 'Languages',
            spanishNative: 'Spanish (Native)',
            english: 'English',
            c1: 'C1 Advanced CEFR',
        },
        headers: {
            workExperience: 'Work Experience',
            selectedProjects: 'Selected Projects',
            education: 'Education',
            blog: 'Blog',
            connect: 'Connect',
        },
        connectText: 'Feel free to contact me at ',
        githubLink: 'Go to GitHub repository',
    },
    es: {
        role: 'Full Stack Developer | Infraestructura & Seguridad',
        about: {
            bio: '<strong>Full Stack Developer</strong> dedicado a construir <strong>aplicaciones web escalables</strong> y experiencias de usuario dinámicas. Actualmente cursando la licenciatura en <strong>Ciberdefensa</strong>, aporto un enfoque de <strong>seguridad desde el diseño</strong> al desarrollo web moderno. Desde la creación de interfaces intuitivas hasta la arquitectura de backends resilientes, transformo ideas en productos <strong>rápidos, seguros y listos para producción</strong>. En mi tiempo libre, mi hobby es resolver laboratorios en <a href="https://tryhackme.com/p/ciberportero" target="_blank" rel="noopener noreferrer" class="underline hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">TryHackMe</a>.',
            languagesLabel: 'Idiomas',
            spanishNative: 'Español (Nativo)',
            english: 'Inglés',
            c1: 'C1 Advanced CEFR',
        },
        headers: {
            workExperience: 'Experiencia Laboral',
            selectedProjects: 'Proyectos Destacados',
            education: 'Educación',
            blog: 'Blog',
            connect: 'Contacto',
        },
        connectText: 'A disposición para cualquier consulta o propuesta:',
        githubLink: 'Ir al repositorio de GitHub',
    },
}

/**
 * Type representing the translation dictionary structure.
 */
export type Translations = typeof translations;
