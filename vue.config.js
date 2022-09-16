const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/css/common.scss";
                         @import "~@/assets/css/variable.scss";`,
      },
    },
  },
});
