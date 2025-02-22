# Panduan Belajar Error Handling di JavaScript

## 📌 Pendahuluan
Error handling adalah teknik untuk menangani kesalahan dalam kode program agar tidak menyebabkan aplikasi berhenti bekerja secara tiba-tiba. JavaScript menyediakan beberapa cara untuk menangani error, seperti `try...catch`, `throw`, dan `finally`.

---

## 🔥 Jenis-Jenis Error di JavaScript
1. **SyntaxError** - Kesalahan dalam penulisan kode.
   ```js
   console.log('Hello World) // SyntaxError: Unexpected string
   ```
2. **ReferenceError** - Mengakses variabel yang belum dideklarasikan.
   ```js
   console.log(x); // ReferenceError: x is not defined
   ```
3. **TypeError** - Menggunakan tipe data yang tidak sesuai.
   ```js
   let num = 5;
   num.toUpperCase(); // TypeError: num.toUpperCase is not a function
   ```
4. **RangeError** - Memanggil fungsi dengan argumen di luar batas yang diperbolehkan.
   ```js
   let arr = new Array(-1); // RangeError: Invalid array length
   ```
5. **EvalError** - Kesalahan terkait penggunaan `eval()` (jarang digunakan).
   ```js
   throw new EvalError('Contoh EvalError');
   ```

---

## 🛠️ Teknik Error Handling
### 1. Try...Catch
Digunakan untuk menangani error tanpa menghentikan eksekusi program.
```js
try {
    let result = x + 5; // ReferenceError
} catch (error) {
    console.error('Terjadi error:', error.message);
}
```

### 2. Throw
Digunakan untuk membuat error secara manual.
```js
function cekUmur(umur) {
    if (umur < 18) {
        throw new Error('Usia harus minimal 18 tahun');
    }
    return 'Akses diberikan';
}

try {
    console.log(cekUmur(15));
} catch (error) {
    console.error(error.message);
}
```

### 3. Finally
Blok `finally` akan selalu dijalankan, baik terjadi error atau tidak.
```js
try {
    console.log('Kode dijalankan');
    throw new Error('Terjadi kesalahan');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Blok finally dieksekusi');
}
```

---

## ✅ Best Practices
1. **Tangkap error secara spesifik** - Hindari menangkap semua error dengan `catch (error)`, gunakan pemeriksaan kondisi.
2. **Gunakan pesan error yang jelas** - Memberikan informasi yang cukup tentang penyebab error.
3. **Gunakan logging** - Catat error menggunakan `console.error()` atau tools seperti Sentry.
4. **Gunakan `try...catch` di tempat yang tepat** - Jangan gunakan secara berlebihan agar tidak memperumit debugging.

---

## 🎯 Kesimpulan
Error handling sangat penting untuk meningkatkan stabilitas aplikasi JavaScript. Dengan memahami berbagai jenis error dan cara menanganinya menggunakan `try...catch`, `throw`, dan `finally`, kita dapat menghindari error yang tidak terduga dan membuat aplikasi lebih robust.

---

💡 **Selamat belajar Error Handling di JavaScript! 🚀**