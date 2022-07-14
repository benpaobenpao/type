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

## 例二、判断是否为基本类型

```javascript
const Type = require("@qdk/type");

Type.isPrimitive(1); // true
Type.isPrimitive("qdk"); // true
Type.isPrimitive(true); // true
Type.isPrimitive([]); // false
Type.isPrimitive({}); // false
```

## 例三、类的名称

```javascript
const Type = require("@qdk/type");

Type.objClassName(1); // Number
Type.objClassName("qdk"); // String
Type.objClassName(true); // Boolean
Type.objClassName([]); // Array
Type.objClassName({}); // Object
```

## 例四、类的对象实例

```javascript
const Type = require("@qdk/type");

Type.instance(1, Number); //true
Type.instance("qdk", String); // true
Type.instance(true, Boolean); // true
Type.instance([], Array); // true
Type.instance({}, Object); // true
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
