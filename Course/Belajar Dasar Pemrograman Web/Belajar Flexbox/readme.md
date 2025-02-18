# Flexbox CSS - Panduan Dasar

Flexbox adalah metode layout CSS yang fleksibel untuk mengatur dan menyusun elemen dalam satu dimensi (horizontal atau vertikal).

## 1. Cara Menggunakan Flexbox
Untuk menggunakan Flexbox, atur elemen container dengan `display: flex;`.

```css
.container {
  display: flex;
  background: lightgray;
}

.item {
  width: 100px;
  height: 100px;
  background: blue;
  margin: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
```

## 2. Properti pada Flex Container
### **a. flex-direction**
Menentukan arah utama elemen flex items:
```css
flex-direction: row; /* Default, horizontal (kiri ke kanan) */
flex-direction: row-reverse; /* Horizontal (kanan ke kiri) */
flex-direction: column; /* Vertical (atas ke bawah) */
flex-direction: column-reverse; /* Vertical (bawah ke atas) */
```

### **b. justify-content**
Mengatur posisi item secara horizontal:
```css
justify-content: flex-start; /* Dari kiri (default) */
justify-content: flex-end; /* Dari kanan */
justify-content: center; /* Tengah */
justify-content: space-between; /* Jarak merata tanpa tepi */
justify-content: space-around; /* Jarak merata dengan ruang di tepi */
justify-content: space-evenly; /* Jarak sama rata */
```

### **c. align-items**
Mengatur posisi item secara vertikal:
```css
align-items: flex-start; /* Di atas */
align-items: flex-end; /* Di bawah */
align-items: center; /* Tengah */
align-items: stretch; /* Mengisi tinggi container */
align-items: baseline; /* Sejajar dengan teks */
```

### **d. flex-wrap**
Mengatur apakah item harus pindah baris jika tidak cukup ruang:
```css
flex-wrap: nowrap; /* Default, semua dalam satu baris */
flex-wrap: wrap; /* Pindah ke baris baru jika tidak cukup ruang */
flex-wrap: wrap-reverse; /* Wrap dengan urutan terbalik */
```

## 3. Properti pada Flex Items
### **a. flex-grow**
Mengisi ruang kosong yang tersedia:
```css
.item {
  flex-grow: 1; /* Akan mengisi sisa ruang */
}
```

### **b. flex-shrink**
Menentukan seberapa banyak item menyusut jika ruang kurang:
```css
.item {
  flex-shrink: 2; /* Item akan menyusut lebih banyak dari yang lain */
}
```

### **c. flex-basis**
Menentukan ukuran awal sebelum `grow` atau `shrink` berlaku:
```css
.item {
  flex-basis: 200px; /* Ukuran awal 200px */
}
```

### **d. align-self**
Mengatur posisi vertikal untuk item tertentu:
```css
.item {
  align-self: center; /* Item ini saja yang di tengah */
}
```

## 4. Contoh Kode Flexbox
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: lightgray;
    }
    .item {
      width: 100px;
      height: 100px;
      background: blue;
      margin: 5px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>
```

## 5. Kesimpulan
Flexbox adalah alat yang kuat untuk mengatur tata letak halaman web secara fleksibel. Dengan memahami properti dasar di atas, kamu dapat dengan mudah membuat desain yang responsif dan rapi.

---
✨ **Selamat belajar Flexbox! 🚀**

