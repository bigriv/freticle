module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  previewHead: (head) => `
    ${head}
    <style>
      html {
        font-size: 6.25%;
        width: 100%;
        height: 100%;
        min-width: 1200rem;
      }
      body {
        width: 100%;
        height: 100%;
      }
    </style>
  `,
};
