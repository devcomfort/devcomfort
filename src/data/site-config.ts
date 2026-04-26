import { personalInfo } from './personal-info';

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    tagline?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'devcomfort',
    subtitle: 'devcomfort의 기술 블로그 & 포트폴리오',
    tagline: 'LLM × Multi-Agent System',
    description: 'devcomfort의 기술 블로그 & 포트폴리오',
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Projects', href: '/projects' },
        { text: 'Research', href: '/research' },
        { text: 'About', href: '/about' }
    ],
    footerNavLinks: [
        { text: 'Tags', href: '/tags' },
        { text: 'Contact', href: '/contact' }
    ],
    socialLinks: [
        { text: 'GitHub', href: personalInfo.social.github },
        { text: 'Email', href: `mailto:${personalInfo.email.personal}` },
        { text: 'RSS', href: personalInfo.social.rss }
    ],
    hero: {
        text: `안녕하세요, devcomfort입니다. 2013년부터 프로그래밍을 시작하여 프론트엔드, 백엔드, 인프라, AI 등 다양한 개발 분야에 깊이 있는 지식을 쌓아왔습니다. 현재 [${personalInfo.affiliation.university}](https://www.gist.ac.kr)에서 ${personalInfo.affiliation.degree} 과정 중이며, LLM과 Multi-Agent System을 중심으로 연구하고 있습니다.`,
        actions: [
            { text: 'Get in Touch', href: '/contact' },
            { text: 'About Me', href: '/about' }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
