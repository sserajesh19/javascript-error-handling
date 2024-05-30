
## Runtime Errors in JavaScript

**Runtime errors** occur during the execution of the code when the JavaScript engine encounters a problem it cannot resolve. These errors can arise from various issues, such as trying to access an undefined variable, calling a method on a null object, or performing illegal operations.

### Common Examples of Runtime Errors

1. **ReferenceError**

   This error occurs when trying to access a variable that hasn't been declared.

   ```javascript
   console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
   ```

2. **TypeError**

   This error occurs when a value is not of the expected type.

   ```javascript
   let obj = null;
   obj.method(); // TypeError: obj.method is not a function
   ```

3. **RangeError**

   This error occurs when a value is not within the set or range of allowed values.

   ```javascript
   function factorial(n) {
     if (n < 0) {
       throw new RangeError('Argument must be a non-negative number');
     }
     // Calculate factorial
   }
   
   factorial(-1); // RangeError: Argument must be a non-negative number
   ```

4. **SyntaxError**

   Although typically a parsing error, a `SyntaxError` can also be thrown by the `eval` function.

   ```javascript
   eval('let a = '); // SyntaxError: Unexpected end of input
   ```

5. **URIError**

   This error occurs when global URI handling functions are used incorrectly.

   ```javascript
   decodeURIComponent('%'); // URIError: URI malformed
   ```

### How to Handle Runtime Errors

Runtime errors can be managed using `try...catch` blocks. This allows you to gracefully handle errors and provide meaningful feedback or fallback functionality.

```javascript
try {
  // Code that may throw an error
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
} finally {
  // Code that will run regardless of an error (optional)
  console.log('Cleanup actions if necessary');
}
```

### Example of Handling Different Runtime Errors

```javascript
try {
  // ReferenceError example
  console.log(nonExistentVariable);

  // TypeError example
  let obj = null;
  obj.method();

  // RangeError example
  function factorial(n) {
    if (n < 0) {
      throw new RangeError('Argument must be a non-negative number');
    }
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  factorial(-1);

} catch (error) {
  if (error instanceof ReferenceError) {
    console.error('Reference error occurred:', error.message);
  } else if (error instanceof TypeError) {
    console.error('Type error occurred:', error.message);
  } else if (error instanceof RangeError) {
    console.error('Range error occurred:', error.message);
  } else {
    console.error('An error occurred:', error.message);
  }
} finally {
  console.log('Error handling complete.');
}
```

### Best Practices to Avoid Runtime Errors

1. **Initialize Variables**

   Always initialize your variables to avoid reference errors.

   ```javascript
   let myVariable = null;
   if (typeof myVariable !== 'undefined') {
     console.log(myVariable);
   }
   ```

2. **Type Checking**

   Perform type checking to ensure values are of expected types before operating on them.

   ```javascript
   function multiply(a, b) {
     if (typeof a !== 'number' || typeof b !== 'number') {
       throw new TypeError('Arguments must be numbers');
     }
     return a * b;
   }
   ```

3. **Input Validation**

   Validate inputs to functions to ensure they fall within acceptable ranges.

   ```javascript
   function setAge(age) {
     if (age < 0 || age > 120) {
       throw new RangeError('Age must be between 0 and 120');
     }
     this.age = age;
   }
   ```

4. **Error Logging**

   Log errors to a file or external logging service to keep track of issues in production.

   ```javascript
   function logError(error) {
     // Send error to logging service
     console.error('Logging error:', error.message);
   }
   
   try {
     // Potential error-prone code
   } catch (error) {
     logError(error);
     // Handle error gracefully
   }
   ```

### Conclusion

Runtime errors in JavaScript can interrupt the normal flow of your application. By using proper error handling techniques such as `try...catch` blocks, type checking, and input validation, you can ensure your application remains robust and user-friendly. Following best practices for error handling will help you create more resilient and maintainable JavaScript code.