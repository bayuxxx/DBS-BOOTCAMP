# Belajar Functional Programming di JavaScript

## 📌 Pendahuluan
Functional Programming (FP) adalah paradigma pemrograman yang berfokus pada penggunaan fungsi sebagai elemen utama dalam pengembangan perangkat lunak. JavaScript mendukung paradigma ini dengan fitur seperti first-class functions, higher-order functions, dan immutable data structures.

## 🎯 Konsep Dasar
1. **Pure Functions**
   - Fungsi yang selalu mengembalikan output yang sama untuk input yang sama.
   - Tidak memiliki efek samping (side effects).

2. **Immutability**
   - Data tidak dapat diubah setelah dibuat.
   - Menggunakan metode seperti `map`, `filter`, dan `reduce` daripada `for` atau `while` loop.

3. **Higher-Order Functions**
   - Fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi sebagai hasil.
   
4. **First-Class Functions**
   - Fungsi dalam JavaScript adalah objek dan dapat diperlakukan seperti nilai lain (disimpan dalam variabel, dikirim sebagai argumen, dll).

5. **Recursion**
   - Menggunakan fungsi yang memanggil dirinya sendiri untuk menggantikan loop iteratif.

6. **Function Composition**
   - Menggabungkan beberapa fungsi kecil menjadi satu fungsi yang lebih kompleks.

## 🚀 Contoh Implementasi
### 1. Pure Function
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 2. Immutability
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### 3. Higher-Order Function
```javascript
const applyOperation = (operation, a, b) => operation(a, b);
console.log(applyOperation(add, 5, 10)); // 15
```

### 4. Recursion
```javascript
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // 120
```

### 5. Function Composition
```javascript
const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const shout = str => exclaim(toUpperCase(str));
console.log(shout("hello")); // "HELLO!"
```

## 📚 Sumber Belajar
- [MDN Web Docs - Functional Programming](https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming)
- [Eloquent JavaScript - Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html)
- [Functional Programming in JavaScript - FreeCodeCamp](https://www.freecodecamp.org/news/functional-programming-in-javascript/)

## 🏁 Kesimpulan
Functional Programming membuat kode lebih bersih, mudah diuji, dan lebih mudah dikelola. Dengan memahami konsep dasar seperti pure functions, higher-order functions, dan immutability, kita bisa menulis kode JavaScript yang lebih efisien dan dapat dipelihara dengan baik.

Happy Coding! 🚀

