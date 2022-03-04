module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },

    // https://stackoverflow.com/questions/70253373/mui-v5-storybook-theme-and-font-family-do-not-work-in-storybook
    features: {
        emotionAlias: false,
    },
}
