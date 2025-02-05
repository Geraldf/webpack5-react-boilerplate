function propTypesTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ["jsx"];
  if (opts.typescript) {
    plugins.push("typescript");
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
  import PropTypes from 'prop-types';
  import useWithViewbox from './useWithViewbox';
  ${interfaces}
  
  function ${componentName}(${props}) {
    const ref = React.useRef();
 
    useWithViewbox(ref);
    props = { ...props, ref};
    return ${jsx};
  }
  
  ${componentName}.propTypes = {
    title: PropTypes.string,
  };
  
  ${exports}
    `;
}

module.exports = propTypesTemplate;
