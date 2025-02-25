# Belajar JavaScript Events (Interaktif)

Repository ini berisi materi dan contoh untuk belajar tentang event JavaScript secara interaktif. Dengan mempelajari event JavaScript, Anda akan dapat membuat website yang lebih dinamis dan responsif terhadap interaksi pengguna.

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Konsep Dasar Event](#konsep-dasar-event)
- [Jenis-jenis Event](#jenis-jenis-event)
- [Cara Menambahkan Event Listener](#cara-menambahkan-event-listener)
- [Event Object](#event-object)
- [Event Propagation](#event-propagation)
- [Contoh Praktis](#contoh-praktis)
- [Latihan](#latihan)
- [Referensi](#referensi)

## Pendahuluan

Event JavaScript adalah aksi atau kejadian yang terjadi di browser, yang bisa dideteksi dan ditanggapi oleh JavaScript. Event bisa dipicu oleh pengguna (seperti klik mouse, sentuhan pada layar, atau penekanan tombol) atau secara otomatis oleh browser (seperti saat halaman selesai dimuat).

## Konsep Dasar Event

Event dalam JavaScript bekerja dengan pola "event-driven programming", di mana kode dieksekusi sebagai respons terhadap event yang terjadi. Ada tiga komponen utama:

1. **Event Source**: Elemen HTML yang menghasilkan event (misalnya button)
2. **Event Type**: Jenis event yang terjadi (misalnya click)
3. **Event Handler**: Fungsi JavaScript yang dijalankan saat event terjadi

## Jenis-jenis Event

Berikut adalah beberapa jenis event yang umum digunakan:

### Event Mouse

- `click`: Terjadi ketika elemen diklik
- `dblclick`: Terjadi ketika elemen diklik dua kali
- `mousedown`: Terjadi ketika tombol mouse ditekan
- `mouseup`: Terjadi ketika tombol mouse dilepas
- `mousemove`: Terjadi ketika pointer mouse bergerak
- `mouseover`: Terjadi ketika pointer mouse masuk ke elemen
- `mouseout`: Terjadi ketika pointer mouse keluar dari elemen

### Event Keyboard

- `keydown`: Terjadi ketika tombol keyboard ditekan
- `keyup`: Terjadi ketika tombol keyboard dilepas
- `keypress`: Terjadi ketika tombol karakter ditekan

### Event Form

- `submit`: Terjadi ketika form dikirim
- `change`: Terjadi ketika nilai elemen form berubah
- `focus`: Terjadi ketika elemen mendapatkan fokus
- `blur`: Terjadi ketika elemen kehilangan fokus
- `input`: Terjadi ketika nilai input berubah

### Event Document/Window

- `load`: Terjadi ketika halaman selesai dimuat
- `resize`: Terjadi ketika window diresize
- `scroll`: Terjadi ketika pengguna scroll di halaman
- `DOMContentLoaded`: Terjadi ketika dokumen HTML dimuat dan diparsing

## Cara Menambahkan Event Listener

Ada beberapa cara untuk menambahkan event listener ke elemen HTML:

### 1. Menggunakan Atribut HTML

```html
<button onclick="handleClick()">Klik Saya</button>

<script>
function handleClick() {
  alert('Button diklik!');
}
</script>
```

### 2. Menggunakan Property DOM

```javascript
const button = document.getElementById('myButton');
button.onclick = function() {
  alert('Button diklik!');
};
```

### 3. Menggunakan addEventListener() (Direkomendasikan)

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button diklik!');
});
```

## Event Object

Saat event terjadi, browser secara otomatis membuat objek event yang berisi informasi tentang event tersebut. Objek ini bisa diakses sebagai parameter dalam event handler:

```javascript
button.addEventListener('click', function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Mouse position:', event.clientX, event.clientY);
});
```

## Event Propagation

Event JavaScript memiliki tiga fase:

1. **Capturing Phase**: Event bergerak dari `window` ke target elemen
2. **Target Phase**: Event mencapai target elemen
3. **Bubbling Phase**: Event "naik" dari target elemen kembali ke `window`

### Event Bubbling

```javascript
// Event akan "bubble up" dari child ke parent
child.addEventListener('click', function() {
  console.log('Child clicked');
});

parent.addEventListener('click', function() {
  console.log('Parent clicked');
});
```

### Menghentikan Propagation

```javascript
child.addEventListener('click', function(event) {
  event.stopPropagation(); // Menghentikan event bubbling
  console.log('Child clicked, event tidak akan sampai ke parent');
});
```

## Contoh Praktis

### 1. Validasi Form

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  const nameInput = document.getElementById('name');
  
  if (nameInput.value.trim() === '') {
    event.preventDefault(); // Mencegah form terkirim
    alert('Nama tidak boleh kosong!');
  }
});
```

### 2. Membuat Dropdown Menu

```javascript
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Menutup dropdown saat mengklik di luar
window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownBtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});
```

## Latihan

1. Buat sebuah counter yang bertambah saat tombol diklik
2. Buat form validasi dengan beberapa field (nama, email, password)
3. Buat image slider yang berganti gambar saat tombol diklik
4. Buat to-do list di mana pengguna bisa menambah dan menghapus item

## Referensi

- [MDN Web Docs - JavaScript Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp)
- [JavaScript.info - Events](https://javascript.info/events)