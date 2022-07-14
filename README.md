# javascript 数据类型

## 数据类型
数据类型分类两类，基本类型和引用类型。

### 基本类型
基本类型包括number（数值）、bigint（整数）、string（字符串）、boolean（布尔值）、undefined（未定义）、null（空）、symbol（符号）。

### 引用类型
引用类型包括object（对象）。


## 安装
```
npm i -S @qdk/type
```

## 例一、类型
```javascript
const Type = require( '@qdk/type');

Type(1);
Type('qdk');
Type(true);
Type([]);
Type({});
```

## 例二、判断是否为基本类型
```javascript
const Type = require( '@qdk/type');

Type.isPrimitive(1);
Type.isPrimitive('qdk');
Type.isPrimitive(true);
Type.isPrimitive([]);
Type.isPrimitive({});
```

## 例三、类的名称
```javascript
const Type = require( '@qdk/type');

Type.objClassName(1);
Type.objClassName('qdk');
Type.objClassName(true);
Type.objClassName([]);
Type.objClassName({});
```

## 例四、类的对象实例
```javascript
const Type = require( '@qdk/type');

Type.instance(1, Number);
Type.instance('qdk', String);
Type.instance(true, Boolean);
Type.instance([], Array);
Type.instance({}, Object);
```

## 例五、综合
```javascript
class Animal{};
let animal = new Animal();

Type(animal);

Type.instance(animal, Animal);
Type.instance(animal, Object);

Type.instanceof(animal, Animal);
Type.instanceof(animal, Object);
```