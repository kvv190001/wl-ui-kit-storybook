import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  refs: {
    angular: {
      title: 'Angular Components',
      url: 'http://localhost:7008', // <-- the Angular storybook port
    },
  },
};

export default config;