const TypeEnum = [
  "Undefined",
  "Null",
  "Number",
  "String",
  "Boolean",
  "BigInt",
  "Symbol",
];

function Type(val) {
  if (val === null) {
    return "null";
  }
  if (val === undefined) {
    return "undefined";
  }
  if (typeof val === "object" && val.hasOwnProperty('length') && val.hasOwnProperty('callee') && typeInner(val) === "arguments") {
    return true;
  }
  return val.constructor.name.toLowerCase();
}

Type.isPrimitive = function (val) {
  if (typeof val === "object") {
    return val === null;
  }
  return typeof val !== "function";
};

TypeEnum.forEach((item) => {
  Type["is" + item] = function (val) {
    return Type(val) === item.toLowerCase();
  };
});

Type.isArray = Array.isArray;
Type.isNaN = isNaN;
Type.isFinite = isFinite;

Type.instance = function (obj, oclass) {
  return obj.constructor === oclass;
};

Type.instanceof = function (obj, oclass) {
  return obj instanceof oclass;
};

Type.objClassName = function (obj) {
  return obj.constructor.name;
};

Type.objClass = function (obj) {
  return obj.constructor;
};

function typeInner(val) {
  return Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase()
    .replace(/\s/g, "");
}

module.exports = Type;
