# Belajar Variabel dan Tipe Data dalam JavaScript

## 1. Pendahuluan
JavaScript adalah bahasa pemrograman yang banyak digunakan untuk mengembangkan aplikasi web. Dalam JavaScript, variabel digunakan untuk menyimpan nilai, sedangkan tipe data menentukan jenis nilai yang dapat disimpan dalam variabel.

## 2. Deklarasi Variabel
JavaScript menyediakan tiga cara untuk mendeklarasikan variabel:

### a. `var`
- Digunakan sebelum ES6.
- Memiliki cakupan fungsi (function scope).
- Dapat dideklarasikan ulang dalam satu cakupan.

```javascript
var nama = "Bayu";
console.log(nama);
```

### b. `let`
- Diperkenalkan dalam ES6.
- Memiliki cakupan blok (block scope).
- Tidak dapat dideklarasikan ulang dalam cakupan yang sama.

```javascript
let umur = 25;
console.log(umur);
```

### c. `const`
- Diperkenalkan dalam ES6.
- Bersifat konstan, nilainya tidak dapat diubah setelah dideklarasikan.
- Memiliki cakupan blok (block scope).

```javascript
const PI = 3.14;
console.log(PI);
```

## 3. Tipe Data dalam JavaScript
Tipe data di JavaScript terbagi menjadi dua kategori utama:

### a. Tipe Data Primitif
1. **String** - Merepresentasikan teks.
   ```javascript
   let teks = "Halo, Dunia!";
   console.log(teks);
   ```
2. **Number** - Merepresentasikan angka.
   ```javascript
   let angka = 100;
   console.log(angka);
   ```
3. **Boolean** - Memiliki dua nilai: `true` atau `false`.
   ```javascript
   let isOnline = true;
   console.log(isOnline);
   ```
4. **Undefined** - Variabel yang belum memiliki nilai.
   ```javascript
   let data;
   console.log(data);
   ```
5. **Null** - Merepresentasikan nilai kosong.
   ```javascript
   let kosong = null;
   console.log(kosong);
   ```
6. **Symbol** - Digunakan untuk membuat nilai unik.
   ```javascript
   let simbol = Symbol("unik");
   console.log(simbol);
   ```

### b. Tipe Data Non-Primitif (Referensi)
1. **Object** - Struktur data yang dapat menyimpan berbagai jenis nilai.
   ```javascript
   let orang = {
       nama: "Bayu",
       umur: 25,
       pekerjaan: "Developer"
   };
   console.log(orang);
   ```
2. **Array** - Struktur data untuk menyimpan daftar nilai.
   ```javascript
   let angka = [1, 2, 3, 4, 5];
   console.log(angka);
   ```
3. **Function** - Digunakan untuk menjalankan blok kode tertentu.
   ```javascript
   function sapa(nama) {
       return "Halo, " + nama + "!";
   }
   console.log(sapa("Bayu"));
   ```

## 4. Kesimpulan
- `var`, `let`, dan `const` digunakan untuk mendeklarasikan variabel.
- Tipe data primitif meliputi string, number, boolean, undefined, null, dan symbol.
- Tipe data non-primitif meliputi object, array, dan function.
- Gunakan `let` dan `const` daripada `var` untuk menghindari kesalahan dalam cakupan variabel.

Happy Coding! 🚀

