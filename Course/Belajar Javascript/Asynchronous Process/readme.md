# Belajar Asynchronous Process di JavaScript

## 📌 Pendahuluan

Asynchronous Process adalah konsep dalam pemrograman JavaScript yang memungkinkan eksekusi kode tanpa harus menunggu proses sebelumnya selesai. Ini sangat penting dalam pengembangan web modern untuk meningkatkan performa aplikasi.

## 🚀 Konsep Dasar

1. **Synchronous vs Asynchronous**

   - **Synchronous**: Kode dieksekusi secara berurutan.
   - **Asynchronous**: Kode tidak harus menunggu perintah sebelumnya selesai untuk dieksekusi.

2. **Callback Function**

   - Fungsi yang diberikan sebagai argumen ke fungsi lain dan dieksekusi setelah tugas selesai.

   ```javascript
   function prosesAsync(callback) {
       setTimeout(() => {
           console.log("Proses selesai!");
           callback();
       }, 2000);
   }

   function selesai() {
       console.log("Lanjut ke proses berikutnya.");
   }

   prosesAsync(selesai);
   ```

3. **Promises**

   - Memudahkan manajemen kode asynchronous dengan `.then()` dan `.catch()`.

   ```javascript
   function prosesAsync() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve("Proses selesai!");
           }, 2000);
       });
   }

   prosesAsync()
       .then(response => console.log(response))
       .catch(error => console.log(error));
   ```

4. **Async/Await**

   - Cara yang lebih bersih dan mudah dibaca untuk menangani proses asynchronous.

   ```javascript
   async function jalankanProses() {
       try {
           let hasil = await prosesAsync();
           console.log(hasil);
       } catch (error) {
           console.log(error);
       }
   }

   jalankanProses();
   ```

## 🎯 Studi Kasus

Implementasi Async/Await dalam pengambilan data dari API menggunakan `fetch`.

```javascript
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Terjadi kesalahan!", error);
    }
}

fetchData();
```

## 📚 Kesimpulan

- Callback digunakan untuk menangani asynchronous tetapi bisa menyebabkan "callback hell".
- Promises memperbaiki masalah callback dengan pendekatan chaining.
- Async/Await membuat kode lebih bersih dan mudah dibaca.

## 🛠 Latihan

1. Buat fungsi asynchronous yang membaca file JSON dan menampilkannya di console.
2. Gunakan `fetch` untuk mengambil data dari API dan tampilkan hanya `title` dari 5 data pertama.

Selamat belajar
