# javascript 数据类型

## 数据类型

数据类型分类两类，基本类型和引用类型。

### 基本类型

基本类型包括 number（数值）、bigint（整数）、string（字符串）、boolean（布尔值）、undefined（未定义）、null（空）、symbol（符号）。

### 引用类型

引用类型包括 object（对象）。

## 安装

```
npm i -S @qdk/type
```

## 例一、类型

```javascript
const Type = require("@qdk/type");

Type(1); // number
Type("qdk"); // string
Type(true); // boolean
Type([]); // array
Type({}); // object
```

## 提示

is + [Number|String|Boolean|Object|Array|Date|Promise...] 与 instance 效果等价。

## 例二、判断类型

```javascript
const Type = require("@qdk/type");

Type.isPrimitive(1); // true
Type.isPrimitive("qdk"); // true
Type.isPrimitive(true); // true
Type.isPrimitive([]); // false
Type.isPrimitive({}); // false

Type.isUndefined(undefined); // true
Type.isNull(null); // true
Type.isNumber(1); // true
let num = new Number(1);
Type.isNumber(num); // true
Type.isNumber(num) && Type.isPrimitive(num); // false
Type.isNumber(Infinity); // true
Type.isNumber(NaN); // true
Type.isString("qdk"); // true
let str = new String("qdk");
Type.isString(str); // true
Type.isString(str) && Type.isPrimitive(str); // false
Type.isBoolean(false); // true
Type.isBigInt(1n); // true
Type.isSymbol(Symbol("qdk")); // true

Type.isArray([]); // true
Type.isRegExp(/qdk/g); // true
Type.isDate(new Date()); // true
Type.isMap(new Map()); // true
Type.isSet(new Set()); // true
Type.isWeakMap(new WeakMap()); // true
Type.isWeakSet(new WeakSet()); // true
Type.isPromise(new Promise(res=>res)); // true
Type.isArrayBuffer(new ArrayBuffer(16)); // true
Type.isDataView(new DataView(new ArrayBuffer(16))); // true
```

## 例三、类的对象实例

```javascript
const Type = require("@qdk/type");

Type.instance(1, Number); //true
Type.instance("qdk", String); // true
Type.instance(true, Boolean); // true
Type.instance([], Array); // true
Type.instance({}, Object); // true
Type.instance(new WeakMap(), WeakMap); // true
Type.instance(new Promise(res=>res), Promise); // true
```

## 例四、类的名称

```javascript
const Type = require("@qdk/type");

Type.objClassName(1); // Number
Type.objClassName("qdk"); // String
Type.objClassName(true); // Boolean
Type.objClassName([]); // Array
Type.objClassName({}); // Object
```

## 例五、综合

```javascript
class Animal {}
let animal = new Animal();

Type(animal); // animal

Type.instance(animal, Animal); // true
Type.instance(animal, Object); // false

Type.instanceof(animal, Animal); // true
Type.instanceof(animal, Object); // true

Type.objClassName(animal); // Animal
Type.objClass(animal); // f Animal()
```

## 网站

[前端咖](https://www.qianduanka.com)

## 联系

微信号：qdk_qdk
球球号：3313362924
