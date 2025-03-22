document.getElementById("id") // Mengambil elemen berdasarkan ID
document.getElementsByClassName("class") // Mengambil elemen berdasarkan class (mengembalikan HTMLCollection)
document.getElementsByTagName("tag") // Mengambil elemen berdasarkan tag HTML (mengembalikan HTMLCollection)
document.querySelector("selector") // Mengambil elemen pertama yang cocok dengan selector (CSS selector)
document.querySelectorAll("selector") // Mengambil semua elemen yang cocok (mengembalikan NodeList)

element.innerHTML = "Teks Baru" // Mengubah isi HTML elemen
element.textContent = "Teks Baru" // Mengubah teks tanpa tag HTML
element.value = "Isi Baru" // Mengubah nilai input
element.src = "gambar.png" // Mengubah sumber gambar
element.href = "https://example.com" // Mengubah tautan

element.style.color = "red" // Mengubah warna teks
element.style.backgroundColor = "blue" // Mengubah warna background
element.style.fontSize = "20px" // Mengubah ukuran font
