# Belajar DOM dan BOM JavaScript

Repository ini berisi materi dan contoh untuk mempelajari DOM (Document Object Model) dan BOM (Browser Object Model) dalam JavaScript. Kedua konsep ini sangat penting untuk membuat website yang interaktif dan dinamis.

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Document Object Model (DOM)](#document-object-model-dom)
  - [Apa itu DOM?](#apa-itu-dom)
  - [Struktur DOM](#struktur-dom)
  - [Mengakses Elemen DOM](#mengakses-elemen-dom)
  - [Memanipulasi Elemen DOM](#memanipulasi-elemen-dom)
  - [Traversing DOM](#traversing-dom)
  - [Event DOM](#event-dom)
- [Browser Object Model (BOM)](#browser-object-model-bom)
  - [Apa itu BOM?](#apa-itu-bom)
  - [Window Object](#window-object)
  - [Location Object](#location-object)
  - [History Object](#history-object)
  - [Navigator Object](#navigator-object)
  - [Screen Object](#screen-object)
- [Contoh Praktis](#contoh-praktis-penggunaan-dom-dan-bom)
- [Latihan](#latihan)
- [Referensi](#referensi)

## Pendahuluan

JavaScript memungkinkan kita untuk memanipulasi elemen HTML, merespons interaksi pengguna, dan mengontrol browser. Kemampuan ini diberikan melalui dua model objek utama:

- **DOM (Document Object Model)**: Antarmuka pemrograman untuk dokumen HTML dan XML
- **BOM (Browser Object Model)**: Antarmuka pemrograman untuk berinteraksi dengan browser

## Document Object Model (DOM)

### Apa itu DOM?

DOM adalah representasi terstruktur dari dokumen HTML sebagai pohon objek. Setiap elemen HTML menjadi "node" dalam pohon, dan JavaScript dapat memanipulasi node-node tersebut untuk mengubah konten, struktur, dan tampilan halaman web.

### Struktur DOM

DOM memiliki struktur pohon hierarkis:

```
Document
└── html
    ├── head
    │   ├── title
    │   ├── meta
    │   └── link
    └── body
        ├── header
        ├── div
        │   ├── h1
        │   └── p
        └── footer
```

### Mengakses Elemen DOM

Ada beberapa metode untuk mengakses elemen di DOM:

```javascript
// Mengakses elemen berdasarkan ID
const header = document.getElementById('header');

// Mengakses elemen berdasarkan nama tag
const paragraphs = document.getElementsByTagName('p');

// Mengakses elemen berdasarkan nama class
const items = document.getElementsByClassName('item');

// Mengakses elemen menggunakan selector CSS (modern)
const container = document.querySelector('.container');
const allButtons = document.querySelectorAll('button');
```

### Memanipulasi Elemen DOM

Setelah mendapatkan elemen, kita dapat memanipulasinya:

#### Mengubah Konten

```javascript
// Mengubah konten HTML
element.innerHTML = '<span>Konten Baru</span>';

// Mengubah text saja
element.textContent = 'Teks Baru';

// Alternatif lain (lebih lama)
element.innerText = 'Teks Baru';
```

#### Mengubah Atribut

```javascript
// Mendapatkan nilai atribut
const src = img.getAttribute('src');

// Mengubah atribut
img.setAttribute('src', 'gambar-baru.jpg');
img.setAttribute('alt', 'Deskripsi gambar');

// Cara langsung untuk atribut standar
img.src = 'gambar-baru.jpg';
img.alt = 'Deskripsi gambar';
```

#### Memanipulasi Style

```javascript
// Mengubah style langsung
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '18px';

// Menambah/menghapus class
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('highlight');
element.classList.contains('active'); // returns true/false
```

#### Menambah dan Menghapus Elemen

```javascript
// Membuat elemen baru
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Paragraf baru';

// Menambahkan elemen ke DOM
parentElement.appendChild(newParagraph);

// Menyisipkan sebelum elemen tertentu
parentElement.insertBefore(newParagraph, referenceElement);

// Metode yang lebih modern
parentElement.append(newParagraph); // menambahkan di akhir
parentElement.prepend(newParagraph); // menambahkan di awal
referenceElement.before(newParagraph); // sebelum elemen
referenceElement.after(newParagraph); // setelah elemen

// Menghapus elemen
element.remove(); // metode modern
parentElement.removeChild(element); // metode lama
```

### Traversing DOM

Setelah mendapatkan satu elemen, kita bisa menavigasi melalui hubungan antar elemen:

```javascript
// Navigasi ke parent
const parent = element.parentNode; // atau parentElement

// Navigasi ke children
const children = element.children; // HTMLCollection
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Navigasi ke siblings
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
```

### Event DOM

DOM memungkinkan kita menangani event seperti klik, input, atau submit form:

```javascript
// Menambahkan event listener
element.addEventListener('click', function(event) {
  console.log('Elemen diklik!');
  console.log(event); // objek event
});

// Menghapus event listener
element.removeEventListener('click', namedFunction);
```

## Browser Object Model (BOM)

### Apa itu BOM?

BOM adalah antarmuka pemrograman untuk berinteraksi dengan browser itu sendiri. BOM memberikan akses ke objek window, yang merupakan objek global dalam JavaScript di browser.

### Window Object

Window adalah objek teratas dalam hierarki BOM dan mewakili jendela browser.

```javascript
// Ukuran jendela
const width = window.innerWidth;
const height = window.innerHeight;

// Dialog
window.alert('Pesan peringatan');
const result = window.confirm('Apakah Anda yakin?');
const name = window.prompt('Masukkan nama Anda');

// Timers
const timeoutId = window.setTimeout(() => {
  console.log('Dijalankan setelah 2 detik');
}, 2000);

const intervalId = window.setInterval(() => {
  console.log('Dijalankan setiap 1 detik');
}, 1000);

// Membersihkan timer
window.clearTimeout(timeoutId);
window.clearInterval(intervalId);

// Membuka jendela baru
const newWindow = window.open('https://example.com', 'ExampleWindow', 'width=800,height=600');
newWindow.close();

// Scroll
window.scrollTo(0, 100);
window.scrollBy(0, 200);
```

### Location Object

Location memberikan informasi tentang URL saat ini dan metode untuk navigasi.

```javascript
// Properti location
console.log(window.location.href); // URL lengkap
console.log(window.location.hostname); // domain
console.log(window.location.pathname); // path
console.log(window.location.search); // query string
console.log(window.location.hash); // hash fragment

// Navigasi
window.location.href = 'https://example.com'; // redirect
window.location.reload(); // refresh halaman
```

### History Object

History memberikan akses ke history browser (navigasi maju/mundur).

```javascript
// Navigasi mundur/maju
window.history.back(); // sama dengan klik tombol back
window.history.forward(); // sama dengan klik tombol forward
window.history.go(-2); // mundur 2 halaman
window.history.go(1); // maju 1 halaman

// HTML5 History API
window.history.pushState({data: 'value'}, 'Title', '/new-url');
window.history.replaceState({data: 'value'}, 'Title', '/replace-url');
```

### Navigator Object

Navigator memberikan informasi tentang browser dan sistem pengguna.

```javascript
// Informasi browser
console.log(navigator.userAgent); // string user-agent
console.log(navigator.language); // bahasa browser
console.log(navigator.languages); // bahasa pilihan
console.log(navigator.cookieEnabled); // status cookie
console.log(navigator.onLine); // status koneksi

// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

### Screen Object

Screen memberikan informasi tentang layar pengguna.

```javascript
console.log(screen.width); // lebar layar
console.log(screen.height); // tinggi layar
console.log(screen.availWidth); // lebar yang tersedia
console.log(screen.availHeight); // tinggi yang tersedia
console.log(screen.colorDepth); // kedalaman warna
console.log(screen.pixelDepth); // kedalaman piksel
```

## Contoh Praktis Penggunaan DOM dan BOM

### 1. Validasi Form Dinamis

```javascript
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error');

emailInput.addEventListener('input', function() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Format email tidak valid';
    errorMessage.style.color = 'red';
  } else {
    errorMessage.textContent = 'Format email valid';
    errorMessage.style.color = 'green';
  }
});
```

### 2. Aplikasi Tab Sederhana

```javascript
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Menghapus class active dari semua tab
    tabs.forEach(t => t.classList.remove('active'));
    
    // Menambahkan class active ke tab yang diklik
    this.classList.add('active');
    
    // Menyembunyikan semua konten
    contents.forEach(content => content.style.display = 'none');
    
    // Menampilkan konten yang sesuai
    const contentId = this.getAttribute('data-tab');
    document.getElementById(contentId).style.display = 'block';
  });
});
```

### 3. Deteksi Status Online/Offline

```javascript
function updateStatus() {
  const statusElement = document.getElementById('status');
  
  if (navigator.onLine) {
    statusElement.textContent = 'Anda sedang online';
    statusElement.className = 'online';
  } else {
    statusElement.textContent = 'Anda sedang offline';
    statusElement.className = 'offline';
  }
}

// Mendengarkan perubahan status koneksi
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

// Cek status awal
updateStatus();
```

## Latihan

1. Buat aplikasi to-do list dengan kemampuan menambah, menghapus, dan menandai item sebagai selesai
2. Buat navigasi tab yang menyimpan status tab aktif di URL (menggunakan Location dan History API)
3. Buat form multi-langkah dengan validasi di setiap langkah
4. Buat galeri gambar sederhana dengan navigasi dan lightbox
5. Implementasikan fitur "dark mode" yang mengingat preferensi pengguna (menggunakan localStorage)

## Referensi

- [MDN Web Docs - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Web Docs - Browser Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [JavaScript.info - Document](https://javascript.info/document)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [W3Schools - JavaScript Browser BOM](https://www.w3schools.com/js/js_window.asp)