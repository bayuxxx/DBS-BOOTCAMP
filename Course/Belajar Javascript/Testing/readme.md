# Belajar Testing di Node.js dan Bun

Testing adalah bagian penting dari pengembangan perangkat lunak untuk memastikan bahwa kode berjalan sesuai dengan harapan. Dalam panduan ini, kita akan belajar bagaimana melakukan testing di Node.js dan Bun.

## 📌 Mengapa Testing Penting?
- Menghindari bug sebelum produksi
- Memastikan kode tetap berfungsi setelah perubahan
- Memudahkan refactoring tanpa merusak fitur yang sudah ada

## 🛠 Alat Testing yang Digunakan

### 1. **Jest** (untuk Node.js)
Jest adalah framework testing yang populer dan mudah digunakan untuk Node.js.

**Instalasi:**
```sh
npm install --save-dev jest
```

**Contoh Penggunaan:**
```javascript
// sum.js
const sum = (a, b) => a + b;
module.exports = sum;
```

```javascript
// sum.test.js
const sum = require('./sum');

test('menjumlahkan 1 + 2 sama dengan 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

**Menjalankan test:**
```sh
npx jest
```

### 2. **Bun Test** (untuk Bun)
Bun memiliki testing bawaan yang cepat dan ringan.

**Contoh Penggunaan:**
```javascript
// sum.test.js
import { expect, test } from "bun:test";
import sum from "./sum";

test("menjumlahkan 1 + 2 sama dengan 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

**Menjalankan test di Bun:**
```sh
bun test
```

## 🔍 Mocking dan Testing Async
Untuk menguji fungsi asinkron dan dependensi eksternal, kita dapat menggunakan mocking.

### Contoh Testing Async dengan Jest:
```javascript
const fetchData = () => Promise.resolve("Hello World");

test("fetchData mengembalikan 'Hello World'", async () => {
  const data = await fetchData();
  expect(data).toBe("Hello World");
});
```

### Contoh Testing Async dengan Bun:
```javascript
test("fetchData mengembalikan 'Hello World'", async () => {
  const fetchData = async () => "Hello World";
  expect(await fetchData()).toBe("Hello World");
});
```

## ✅ Kesimpulan
- Gunakan **Jest** untuk aplikasi Node.js
- Gunakan **Bun Test** untuk proyek yang menggunakan Bun
- Gunakan mocking untuk menguji dependensi eksternal dan fungsi async

## 📖 Referensi
- [Dokumentasi Jest](https://jestjs.io/)
- [Dokumentasi Bun](https://bun.sh/docs/test)

Selamat belajar testing! 🚀

