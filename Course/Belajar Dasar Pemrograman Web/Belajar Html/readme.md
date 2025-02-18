# Kumpulan Tag HTML Lengkap 📚

## 1. Div & Container 📦
```html
<!-- Div digunakan untuk mengelompokkan elemen -->
<div>
    <h2>Bagian 1</h2>
    <p>Ini konten bagian 1</p>
</div>

<!-- Span untuk formatting inline -->
<p>Ini adalah <span style="color: red;">teks merah</span></p>
```

## 2. Tabel 📊
```html
<table border="1">
    <!-- Header Tabel -->
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nilai</th>
        </tr>
    </thead>
    
    <!-- Isi Tabel -->
    <tbody>
        <tr>
            <td>1</td>
            <td>Budi</td>
            <td>85</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Ani</td>
            <td>90</td>
        </tr>
    </tbody>
</table>
```

## 3. Form & Input 📝
```html
<form action="/submit" method="POST">
    <!-- Input Teks -->
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" required>
    
    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <!-- Radio Button -->
    <input type="radio" id="pria" name="gender" value="pria">
    <label for="pria">Pria</label>
    <input type="radio" id="wanita" name="gender" value="wanita">
    <label for="wanita">Wanita</label>
    
    <!-- Checkbox -->
    <input type="checkbox" id="setuju" name="setuju">
    <label for="setuju">Saya setuju dengan ketentuan</label>
    
    <!-- Dropdown -->
    <select name="kelas">
        <option value="10">Kelas 10</option>
        <option value="11">Kelas 11</option>
        <option value="12">Kelas 12</option>
    </select>
    
    <!-- Text Area -->
    <textarea name="pesan" rows="4" cols="50">
        Tulis pesan di sini...
    </textarea>
    
    <!-- Tombol -->
    <button type="submit">Kirim</button>
    <button type="reset">Reset</button>
</form>
```

## 4. Video 🎥
```html
<!-- Video dari file lokal -->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Browser kamu tidak mendukung tag video.
</video>

<!-- Video YouTube (embed) -->
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allowfullscreen>
</iframe>
```

## 5. Audio 🎵
```html
<!-- Audio dari file lokal -->
<audio controls>
    <source src="musik.mp3" type="audio/mpeg">
    <source src="musik.ogg" type="audio/ogg">
    Browser kamu tidak mendukung tag audio.
</audio>
```

## 6. List Lanjutan 📋
```html
<!-- List Definisi -->
<dl>
    <dt>HTML</dt>
    <dd>Bahasa untuk membuat struktur website</dd>
    
    <dt>CSS</dt>
    <dd>Bahasa untuk mengatur tampilan website</dd>
</dl>

<!-- List Bersarang -->
<ul>
    <li>Buah
        <ul>
            <li>Apel</li>
            <li>Jeruk</li>
        </ul>
    </li>
    <li>Sayur
        <ul>
            <li>Bayam</li>
            <li>Wortel</li>
        </ul>
    </li>
</ul>
```

## 7. Semantic Tags 🏗️
```html
<!-- Header website -->
<header>
    <h1>Judul Website</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<!-- Konten utama -->
<main>
    <article>
        <h2>Judul Artikel</h2>
        <p>Isi artikel...</p>
    </article>
    
    <aside>
        <h3>Sidebar</h3>
        <p>Konten tambahan...</p>
    </aside>
</main>

<!-- Footer website -->
<footer>
    <p>Copyright 2025</p>
</footer>
```

## Contoh Penggunaan Lengkap
```html
<!DOCTYPE html>
<html>
<head>
    <title>Website Lengkap</title>
</head>
<body>
    <header>
        <h1>Website Sekolahku</h1>
        <nav>
            <a href="#home">Home</a> |
            <a href="#profil">Profil</a> |
            <a href="#kontak">Kontak</a>
        </nav>
    </header>

    <main>
        <div id="profil">
            <h2>Profil Siswa</h2>
            <table border="1">
                <tr>
                    <th>Nama</th>
                    <td>Budi Santoso</td>
                </tr>
                <tr>
                    <th>Kelas</th>
                    <td>XI IPA 1</td>
                </tr>
            </table>
        </div>

        <div id="galeri">
            <h2>Galeri Kegiatan</h2>
            <video width="320" height="240" controls>
                <source src="kegiatan.mp4" type="video/mp4">
            </video>
        </div>

        <div id="kontak">
            <h2>Formulir Kontak</h2>
            <form>
                <label for="nama">Nama:</label><br>
                <input type="text" id="nama" name="nama"><br>
                
                <label for="pesan">Pesan:</label><br>
                <textarea id="pesan" name="pesan"></textarea><br>
                
                <button type="submit">Kirim</button>
            </form>
        </div>
    </main>

    <footer>
        <p>© 2025 Website Sekolahku</p>
    </footer>
</body>
</html>
```

## Tips Penggunaan 💡
1. `<div>` sangat berguna untuk mengelompokkan elemen
2. Selalu beri `label` untuk setiap `input` di form
3. Gunakan atribut `alt` pada gambar dan `controls` pada video/audio
4. Manfaatkan semantic tags untuk struktur yang lebih jelas
5. Tag tabel gunakan untuk data, bukan layout
6. Form selalu perlu method dan action untuk mengirim data

## Catatan Penting ⚠️
- Beberapa tag perlu atribut tambahan untuk berfungsi maksimal
- Tag semantic membantu SEO website
- Tidak semua browser mendukung semua format video/audio
- Untuk form yang berfungsi, perlu backend/server
- Styling sebaiknya menggunakan CSS, bukan atribut HTML