# Belajar Code Quality di JavaScript

Code Quality adalah aspek penting dalam pengembangan perangkat lunak yang memastikan kode mudah dibaca, dipelihara, dan bebas dari kesalahan. Berikut adalah panduan untuk meningkatkan kualitas kode JavaScript Anda.

## 📌 Best Practices

1. **Gunakan Konvensi Penamaan yang Jelas**
   - Gunakan camelCase untuk variabel dan fungsi (`myVariable`)
   - Gunakan PascalCase untuk kelas (`MyClass`)
   - Gunakan UPPER_CASE untuk konstanta global (`MAX_LIMIT`)

2. **Tulis Kode yang Mudah Dibaca**
   - Gunakan indentasi yang konsisten
   - Hindari kode yang terlalu panjang dalam satu baris
   - Tambahkan komentar pada bagian kode yang kompleks

3. **Gunakan Strict Mode**
   ```javascript
   'use strict';
   ```
   Mode ini membantu mendeteksi kesalahan umum dan mencegah penggunaan variabel global secara tidak disengaja.

4. **Gunakan Let dan Const**
   - Gunakan `const` untuk variabel yang tidak berubah
   - Gunakan `let` untuk variabel yang bisa berubah
   ```javascript
   const MAX_USERS = 100;
   let count = 0;
   ```

5. **Hindari Magic Numbers dan Strings**
   ```javascript
   const TAX_RATE = 0.1;
   function calculateTax(price) {
       return price * TAX_RATE;
   }
   ```

6. **Gunakan Template Literals**
   ```javascript
   const name = 'Alice';
   console.log(`Hello, ${name}!`);
   ```

7. **Gunakan Optional Chaining dan Nullish Coalescing** *(ES6+)*
   ```javascript
   const user = {};
   console.log(user?.profile?.name ?? 'Guest');
   ```

## 🔍 Linting dan Formatting

Gunakan alat bantu berikut untuk memastikan kualitas kode tetap terjaga:

- **ESLint**: Untuk mendeteksi kesalahan sintaks dan aturan coding
  ```sh
  npm install eslint --save-dev
  ```
- **Prettier**: Untuk format kode secara otomatis
  ```sh
  npm install prettier --save-dev
  ```
- **Husky + Lint-Staged**: Untuk memastikan kode selalu terlinting sebelum commit
  ```sh
  npm install husky lint-staged --save-dev
  ```

## ✅ Unit Testing

Gunakan framework testing seperti **Jest** atau **Mocha** untuk memastikan kode berjalan sesuai ekspektasi.

```sh
npm install jest --save-dev
```

Contoh unit test sederhana dengan Jest:
```javascript
const sum = (a, b) => a + b;
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## 📖 Referensi

- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Best_practices)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)

Selamat belajar! 🚀

