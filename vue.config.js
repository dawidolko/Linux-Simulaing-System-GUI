module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "./docs",
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/dev": {
        target: "http://127.0.0.1:8079",
        changeOrigin: true,
        pathRewrite: {
          "^/dev": "",
        },
      },
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
