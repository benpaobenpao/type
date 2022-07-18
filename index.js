const TypeEnum = [
  "Undefined",
  "Null",
  "Number",
  "String",
  "Boolean",
  "BigInt",
  "Symbol",
];

const TypeObjEnum = [
  "Object",
  "Function",
  "GeneratorFunction",
  "RegExp",
  "Date",
  "Error",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Promise",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "ArrayBuffer",
  "DataView",
];

function Type(val) {
  if (val === null) {
    return "null";
  }
  if (val === undefined) {
    return "undefined";
  }
  if (typeof val === "object") {
    if (
      val.hasOwnProperty("length") &&
      val.hasOwnProperty("callee") &&
      typeInner(val) === "arguments"
    ) {
      return "arguments";
    }
    
    if (
      val.hasOwnProperty("next") &&
      val.hasOwnProperty("return") &&
      typeInner(val) === "generator"
    ) {
      return "generator";
    }
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

TypeObjEnum.forEach((item) => {
  Type["is" + item] = function (val) {
    return Type(val) === item.toLowerCase();
  };
});

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
