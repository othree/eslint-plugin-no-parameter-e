
function checkParam (param) {
  if (param.type === 'Identifier') {
    if (param.name === 'e') {
      return param;
    }
  } else if (param.type === 'AssignmentPattern') {
    return checkParam(param.left);
  }
  return false;
}

function checkParams (node, func) {
  var i = 0;
  for (i = 0; i < node.params.length; i++) {
    func(node.params[i]);
  }
}

function functionChecker (context) {
  return function (node) {
    checkParams(node, function (param) {
      var result = checkParam(param);
      if (result) {
        context.report({node: result, message: 'Not allow parameter named e, confused with event and error'});
      }
    });
  };
}

module.exports = {
  create: function (context) {
    var checker = functionChecker(context);

    return {
      FunctionDeclaration: checker,
      FunctionExpression: checker,
      ArrowFunctionExpression: checker,
    };
  },
};
