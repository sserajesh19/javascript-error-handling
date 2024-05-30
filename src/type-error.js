

A **TypeError** occurs when an operation is performed on a value of the wrong type. It is a common runtime error in JavaScript and can happen in various situations.

### Common Causes of TypeErrors

1. **Calling a Function on a Non-Function**

   Attempting to call a function on a value that is not a function.

   ```javascript
   let x = 10;
   x(); // TypeError: x is not a function
   ```

2. **Accessing Properties or Methods on Undefined or Null**

   Trying to access properties or methods on undefined or null values.

   ```javascript
   let obj = null;
   obj.method(); // TypeError: Cannot read property 'method' of null
   ```

3. **Incorrect Argument Types**

   Passing arguments of the wrong type to a function.

   ```javascript
   function add(a, b) {
     return a + b;
   }

   add("5", 10); // TypeError: Cannot convert string to number
   ```

4. **Using Undefined Variables**

   Trying to perform operations on variables that have not been defined.

   ```javascript
   console.log(undefinedVariable); // TypeError: undefinedVariable is not defined
   ```

5. **Using Operator on Incompatible Types**

   Applying operators to values of incompatible types.

   ```javascript
   let result = "Hello" - 5; // TypeError: Cannot convert string to number
   ```

### How to Handle TypeErrors

TypeErrors can be handled using `try...catch` blocks or by checking the type of values before performing operations.

```javascript
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  if (error instanceof TypeError) {
    console.error('TypeError caught:', error.message);
  } else {
    console.error('An error occurred:', error.message);
  }
}
```

### Example of Preventing TypeErrors

1. **Type Checking**

   Check the types of values before performing operations on them.

   ```javascript
   function add(a, b) {
     if (typeof a !== 'number' || typeof b !== 'number') {
       throw new TypeError('Arguments must be numbers');
     }
     return a + b;
   }
   ```

2. **Null and Undefined Checks**

   Ensure that variables are not null or undefined before accessing their properties or methods.

   ```javascript
   let obj = null;
   if (obj && obj.method) {
     obj.method();
   }
   ```

3. **Operator Checks**

   Be careful when using operators and ensure that the operands are of compatible types.

   ```javascript
   let result = "5" * 10; // Use parseInt or parseFloat to convert string to number
   ```

### Example of Fixing a TypeError

Original Code with TypeError:

```javascript
let obj = null;
obj.method(); // TypeError: Cannot read property 'method' of null
```

Fixed Code:

```javascript
let obj = {};
if (obj && obj.method) {
  obj.method(); // Safely access method
}
```

### Best Practices to Avoid TypeErrors

1. **Use Strict Equality**

   Use strict equality (`===` and `!==`) to compare values, as it also checks the types.

2. **Type Coercion**

   Be aware of type coercion in JavaScript and use explicit type conversion when necessary.

3. **Check for Null and Undefined**

   Always check for null and undefined values before accessing their properties or methods.

4. **Type Annotations**

   Use type annotations in TypeScript or JSDoc to provide additional type information and catch type-related errors at compile-time.

### Conclusion

TypeErrors in JavaScript can occur due to various reasons, including incorrect argument types, null or undefined values, and incompatible operations between different types. By understanding the causes of TypeErrors and following best practices to handle and prevent them, you can write more robust and error-free JavaScript code.