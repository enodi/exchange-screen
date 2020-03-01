const { override, fixBabelImports, addLessLoader } = require("customize-cra");

//override default theme in ant design
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    //override less variables specified by ant design
    modifyVars: {
      "@secondary-color": "#c30000",
      "@text-color-secondary": "#fff"
    }
  })
);
