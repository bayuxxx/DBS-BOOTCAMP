# Panduan Lengkap Belajar CSS 🎨

## Cara Menulis CSS
Ada 3 cara menulis CSS:

### 1. Internal CSS (di dalam file HTML)
```html
<head>
    <style>
        h1 {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
```

### 2. External CSS (file terpisah)
```html
<!-- Di file HTML -->
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### 3. Inline CSS (langsung di elemen)
```html
<p style="color: red; font-size: 16px;">Teks merah</p>
```

## Selector CSS Dasar
```css
/* Selector tag */
p {
    color: blue;
}

/* Selector class */
.judul {
    font-size: 24px;
}

/* Selector id */
#header {
    background-color: black;
}

/* Selector multiple */
h1, h2, h3 {
    font-family: Arial;
}

/* Selector nested */
div p {
    margin: 10px;
}
```

## Property CSS yang Sering Dipakai

### 1. Teks & Font
```css
.teks {
    color: red;                      /* Warna teks */
    font-family: Arial, sans-serif;  /* Jenis font */
    font-size: 16px;                /* Ukuran font */
    font-weight: bold;              /* Ketebalan font */
    text-align: center;             /* Perataan teks */
    line-height: 1.6;               /* Jarak antar baris */
    text-decoration: underline;     /* Garis bawah, dll */
    text-transform: uppercase;      /* Huruf besar/kecil */
}
```

### 2. Background
```css
.box {
    background-color: #ff0000;          /* Warna background */
    background-image: url('bg.jpg');    /* Gambar background */
    background-repeat: no-repeat;        /* Pengulangan background */
    background-position: center;         /* Posisi background */
    background-size: cover;             /* Ukuran background */
}
```

### 3. Border & Box Model
```css
.kotak {
    margin: 10px;              /* Jarak luar */
    padding: 15px;             /* Jarak dalam */
    border: 2px solid black;   /* Border */
    border-radius: 5px;        /* Sudut melengkung */
    width: 200px;              /* Lebar */
    height: 100px;             /* Tinggi */
}
```

### 4. Layout & Positioning
```css
.container {
    display: flex;              /* Flexible box */
    position: relative;         /* Positioning */
    float: left;               /* Mengambang */
    z-index: 1;                /* Urutan tumpukan */
}

/* Grid Layout */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
```

### 5. Responsive Design
```css
/* Media Query */
@media screen and (max-width: 768px) {
    .container {
        width: 100%;
    }
}

/* Flexible Image */
img {
    max-width: 100%;
    height: auto;
}
```

## Contoh Lengkap Website Sederhana
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Reset CSS */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Header */
        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }

        /* Navigasi */
        nav {
            background-color: #f4f4f4;
            padding: 10px;
        }

        nav a {
            color: #333;
            text-decoration: none;
            padding: 10px;
            margin: 0 5px;
        }

        nav a:hover {
            background-color: #333;
            color: white;
        }

        /* Konten Utama */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Card */
        .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Tombol */
        .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .button:hover {
            background-color: #45a049;
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .container {
                padding: 10px;
            }

            nav a {
                display: block;
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Website Saya</h1>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="container">
        <div class="card">
            <h2>Selamat Datang</h2>
            <p>Ini adalah contoh website dengan CSS.</p>
            <button class="button">Selengkapnya</button>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 Website Saya</p>
    </footer>
</body>
</html>
```

## Tips CSS 💡
1. Gunakan CSS Reset untuk konsistensi antar browser
2. Manfaatkan flexbox/grid untuk layout modern
3. Selalu buat desain responsif dengan media query
4. Gunakan class daripada ID untuk reusability
5. Perhatikan spesifisitas selector
6. Kelompokkan CSS berdasarkan komponen

## Cara Mengatur Warna
```css
.warna {
    /* Nama warna */
    color: red;
    
    /* Hex color */
    color: #ff0000;
    
    /* RGB */
    color: rgb(255, 0, 0);
    
    /* RGBA (dengan transparansi) */
    color: rgba(255, 0, 0, 0.5);
    
    /* HSL */
    color: hsl(0, 100%, 50%);
}
```

## Unit Ukuran di CSS
```css
.ukuran {
    /* Pixel */
    width: 100px;
    
    /* Persentase */
    width: 50%;
    
    /* em (relatif terhadap ukuran font parent) */
    margin: 1em;
    
    /* rem (relatif terhadap ukuran font root) */
    font-size: 1.2rem;
    
    /* vh/vw (relatif terhadap viewport) */
    height: 100vh;
    width: 100vw;
}
```