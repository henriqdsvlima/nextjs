module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    moduleNameWrapper: {
        '^styled-components':
            '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
    }
}
