// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ["jsx"];

  if (opts.typescript) {
    plugins.push("typescript");
  }

  const typeScriptTpl = template.smart({ plugins });

  // Remove leading "Svg" from component name.
  componentName.name = componentName.name.replace(/^(Svg)+/, "");
  exports.declaration.name = componentName.name;

  // Add class "gastromaticons-small" for components ending in "small" or "Small".
  if (componentName.name.match(/([Ss])mall$/)) {
    jsx.openingElement.attributes.push({
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "className" },
      value: {
        type: "JSXExpressionContainer",
        expression: template.ast("props.className && `${props.className}`")
          .expression,
      },
    });
  }

  return typeScriptTpl.ast`${imports}
${interfaces}
function ${componentName}(${props}): React.ReactElement {
  return ${jsx};
}
${exports}
  `;
}
module.exports = defaultTemplate;
