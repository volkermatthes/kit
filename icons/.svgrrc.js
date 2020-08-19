module.exports = {
  template: require("./src/template.js"),
  dimensions: false,
  typescript: true,
  replaceAttrValues: { "#000": "{props.color || '#000'}" },
  expandProps: "start",
};
