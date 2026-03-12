// src/data/personal-info.ts
// ✏️  Edit this file to update your contact details across the entire site.

export const personalInfo = {
    name: 'devcomfort',
    email: {
        personal: 'im@devcomfort.me',
        work: 'devcomfort@t-eut.com'
    },
    // phone: '+82-10-XXXX-XXXX',   // uncomment when ready
    social: {
        github: 'https://github.com/devcomfort',
        rss: '/rss.xml'
    },
    affiliation: {
        university: 'GIST (Gwangju Institute of Science and Technology)',
        degree: "Master's in AI Convergence",
        company: '(주)마시는친구들',
        companyUrl: 'https://litt.ly/teut',
        role: 'Tech Lead'
    }
} as const;

export type PersonalInfo = typeof personalInfo;
