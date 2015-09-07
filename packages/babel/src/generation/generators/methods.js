import * as t from "../../types";

/**
 * Prints nodes with params, prints typeParameters, params, and returnType, handles optional params.
 */

export function _params(node, print) {
  print.plain(node.typeParameters);
  this.push("(");

  var iterator = (node) => {
    if (node.optional) this.push("?");
    print.plain(node.typeAnnotation);
  };

  if (node.params && node.params.length !== 0) {
    print.tryMaxColumns(
      () => {
        print.list(node.params, {iterator});
      },
      () => {
        print.generator.newline();
        print.join(node.params, {separator: ',\n', indent: true, iterator});
        print.generator.newline();
      },
    );
  }

  this.push(")");

  if (node.returnType) {
    print.plain(node.returnType);
  }
}

/**
 * Prints method-like nodes, prints key, value, and body, handles async, generator, computed, and get or set.
 */

export function _method(node, print) {
  var value = node.value;
  var kind  = node.kind;
  var key   = node.key;

  if (kind === "method" || kind === "init") {
    if (value.generator) {
      this.push("*");
    }
  }

  if (kind === "get" || kind === "set") {
    this.push(kind + " ");
  }

  if (value.async) this.push("async ");

  if (node.computed) {
    this.push("[");
    print.plain(key);
    this.push("]");
  } else {
    print.plain(key);
  }

  this._params(value, print);
  this.space();
  print.plain(value.body);
}

/**
 * Prints FunctionExpression, prints id and body, handles async and generator.
 */

export function FunctionExpression(node, print) {
  if (node.async) this.push("async ");
  this.push("function");
  if (node.generator) this.push("*");

  if (node.id) {
    this.push(" ");
    print.plain(node.id);
  }

  this._params(node, print);
  this.space();
  print.plain(node.body);
}

/**
 * Alias FunctionExpression printer as FunctionDeclaration.
 */

export { FunctionExpression as FunctionDeclaration };

/**
 * Prints ArrowFunctionExpression, prints params and body, handles async.
 * Leaves out parentheses when single param.
 */

export function ArrowFunctionExpression(node, print) {
  if (node.async) this.push("async ");

  if (node.params.length === 1 && t.isIdentifier(node.params[0])) {
    print.plain(node.params[0]);
  } else {
    this._params(node, print);
  }

  this.push(" => ");

  const bodyNeedsParens = t.isObjectExpression(node.body);

  if (bodyNeedsParens) {
    this.push("(");
  }

  print.plain(node.body);

  if (bodyNeedsParens) {
    this.push(")");
  }
}
