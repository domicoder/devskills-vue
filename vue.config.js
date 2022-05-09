module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "devskills VUE - NewCombin form";
      return args;
    });
  },
};
