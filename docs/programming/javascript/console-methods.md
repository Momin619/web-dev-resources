# JavaScript Console Methods

Category: JavaScript / Debugging  
Description: Reference guide for commonly used console methods in JavaScript for debugging, logging, and performance tracking.  
Maintainer: @Momin619  
Last Updated: 2026-04-10

---

## Introduction

The console object provides utilities for debugging JavaScript code. It helps inspect values, track execution flow, and analyze performance.

---

## 1. console.log()

Purpose: Used to output general debugging information.

Example:

```js
console.log("Hello World");
```

Use cases:

- Inspect variables
- Debug application flow

---

## 2. console.error()

Purpose: Displays error messages in the console.

Example:

```js
console.error("Something went wrong");
```

Use cases:

- API failures
- Runtime errors

---

## 3. console.warn()

Purpose: Displays warning messages.

Example:

```js
console.warn("This is a warning");
```

Use cases:

- Deprecated features
- Potential issues

---

## 4. console.table()

Purpose: Displays structured data in table format.

Example:

```js
console.table([{ name: "Ali" }, { name: "Momin" }]);
```

Use cases:

- Debug arrays and objects
- Inspect API responses

---

## 5. console.time() / console.timeEnd()

Purpose: Measures execution time of a code block.

Example:

```js
console.time("test");
// code
console.timeEnd("test");
```

Use cases:

- Performance testing
- Optimization

---

## 6. console.trace()

Purpose: Shows the call stack of a function.

Example:

```js
console.trace();
```

Use cases:

- Debug function flow
- Trace execution path

---

## 7. console.group() / console.groupEnd()

Purpose: Groups related logs together.

Example:

```js
console.group("User Flow");
console.log("Start");
console.groupEnd();
```

Use cases:

- Organize logs
- Debug complex flows

---

## 8. console.count()

Example:

```js
console.count("click");
```

Use cases:

- Event tracking
- Function call monitoring

---

## 9. console.assert()

Example:

```js
console.assert(2 > 3, "Error");
```

Use cases:

- Validation checks
- Debug assumptions

---

## 10. console.clear()

Example:

```js
console.clear();
```

Use cases:

- Reset debugging session

---

## 11. Object Logging

Example:

```js
let age = 17;
console.log({ age });
```

Use cases:

- Better readability of variables

---

## 12. JSON.stringify()

Example:

```js
console.log(JSON.stringify(obj, null, 2));
```

Use cases:

- API debugging
- Structured output

---

## Summary

Console methods are essential debugging tools that help developers understand program behavior, track performance, and inspect data efficiently.
