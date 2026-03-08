/**
 * @file constants.ts
 * @description Centralized site-wide links and configuration to avoid hardcoding.
 */

export const SITE_LINKS = {
    home: '/',
    settings: '/settings',
    docs: {
        root: '/docs',
        proposal: '/docs/proposal',
        manual: '/docs/manual',
        identity: '/docs/identity',
        qa: '/docs/qa',
    },
    sections: {
        ecosystem: '#ecosystem',
        technology: '#technology',
    },
    external: {
        bitkub: 'https://www.bitkub.com',
        kubchain: 'https://www.bitkubchain.com',
        github: 'https://github.com/GridsMicro/Bitkub-Dev', // Hypothetical
    },
    legal: {
        privacy: '/privacy',
        terms: '/terms',
        security: '/security',
    }
};
