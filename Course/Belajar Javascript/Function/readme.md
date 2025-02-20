# Belajar Function di JavaScript

## Apa Itu Function?
Function (fungsi) dalam JavaScript adalah blok kode yang dapat digunakan kembali dan dieksekusi ketika dipanggil. Fungsi membantu mengorganisir kode agar lebih modular, reusable, dan mudah dipahami.

---

## Jenis-Jenis Function dalam JavaScript

### 1. **Function Declaration**
Function declaration adalah cara mendeklarasikan fungsi dengan kata kunci `function`. Fungsi ini dapat dipanggil sebelum dideklarasikan karena hoisting.

```javascript
function greet(name) {
    return `Halo, ${name}!`;
}
console.log(greet("Bayu")); // Output: Halo, Bayu!
```

### 2. **Function Expression**
Function expression adalah fungsi yang disimpan dalam variabel. Fungsi ini tidak bisa dipanggil sebelum dideklarasikan karena tidak di-hoist seperti function declaration.

```javascript
const greet = function(name) {
    return `Halo, ${name}!`;
};
console.log(greet("Bayu"));
```

### 3. **Arrow Function**
Arrow function adalah sintaks yang lebih ringkas dari function expression, diperkenalkan di ES6.

```javascript
const greet = (name) => `Halo, ${name}!`;
console.log(greet("Bayu"));
```

### 4. **Immediately Invoked Function Expression (IIFE)**
IIFE adalah fungsi yang langsung dieksekusi setelah dideklarasikan. Biasanya digunakan untuk menghindari polusi variabel global.

```javascript
(function() {
    console.log("Ini adalah IIFE!");
})();
```

### 5. **Function dengan Default Parameter**
Parameter default digunakan jika tidak ada nilai yang dikirim saat fungsi dipanggil.

```javascript
function greet(name = "User") {
    return `Halo, ${name}!`;
}
console.log(greet()); // Output: Halo, User!
```

### 6. **Function dengan Rest Parameter**
Rest parameter memungkinkan sebuah fungsi menerima jumlah argumen yang tidak terbatas.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

### 7. **Callback Function**
Callback function adalah fungsi yang dipassing sebagai argumen ke fungsi lain dan dipanggil setelah suatu proses selesai.

```javascript
function greet(name, callback) {
    console.log(`Halo, ${name}!`);
    callback();
}
function done() {
    console.log("Selesai!");
}
greet("Bayu", done);
```

### 8. **Higher-Order Function**
Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi lain disebut Higher-Order Function.

```javascript
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeat(() => console.log("Hello!"), 3);
```

### 9. **Recursive Function**
Fungsi yang memanggil dirinya sendiri disebut rekursi. Contohnya adalah perhitungan faktorial.

```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

---

## Kesimpulan
Fungsi dalam JavaScript sangat fleksibel dan memiliki berbagai bentuk. Memahami berbagai jenis fungsi ini akan membantu dalam menulis kode yang lebih efisien dan modular.

Semoga bermanfaat! 🚀

