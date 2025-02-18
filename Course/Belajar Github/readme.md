# Panduan Belajar GitHub

GitHub adalah platform berbasis Git untuk menyimpan dan mengelola kode sumber secara kolaboratif. Berikut adalah panduan dasar untuk menggunakan GitHub.

## 1. **Membuat Repository Baru**
### **a. Melalui GitHub Website**
1. Buka [GitHub](https://github.com/).
2. Klik tombol `New Repository`.
3. Masukkan nama repository, deskripsi (opsional), dan pilih visibilitas (public/private).
4. Klik `Create Repository`.

### **b. Melalui Terminal (Git CLI)**
```sh
git init nama-repo
cd nama-repo
git remote add origin https://github.com/username/nama-repo.git
```

## 2. **Mengupload Proyek ke Repository GitHub**
Jika proyek sudah ada di lokal, jalankan perintah berikut:
```sh
git init  # Inisialisasi repository Git

git add .  # Menambahkan semua file ke staging area

git commit -m "First commit"  # Membuat commit pertama

git branch -M main  # Mengubah nama branch ke main

git remote add origin https://github.com/username/nama-repo.git  # Hubungkan ke GitHub

git push -u origin main  # Upload ke GitHub
```

## 3. **Mengupdate Repository (Push Perubahan ke GitHub)**
Jika ada perubahan dalam kode, jalankan:
```sh
git add .
git commit -m "Update fitur X"
git push origin main
```

## 4. **Mengunduh Repository (Clone Repo dari GitHub)**
Untuk mendapatkan kode dari GitHub:
```sh
git clone https://github.com/username/nama-repo.git
```

## 5. **Mengambil Update dari Repository (Pull Changes)**
Jika ada perubahan dari repo yang dibuat oleh tim lain:
```sh
git pull origin main
```
Perintah ini akan menarik perubahan terbaru dari repository GitHub ke komputer lokal.

## 6. **Membuat dan Menggunakan Branch**
### **a. Membuat Branch Baru**
```sh
git branch nama-branch
```
### **b. Berpindah ke Branch Baru**
```sh
git checkout nama-branch
```
atau dengan satu perintah:
```sh
git checkout -b nama-branch
```

### **c. Menggabungkan Branch ke Main (Merge)**
```sh
git checkout main  # Berpindah ke main
git merge nama-branch  # Gabungkan branch ke main
git push origin main  # Upload ke GitHub
```

## 7. **Menghapus Branch**
### **a. Menghapus Branch Lokal**
```sh
git branch -d nama-branch
```
### **b. Menghapus Branch di GitHub**
```sh
git push origin --delete nama-branch
```

## 8. **Membuat Pull Request (PR)**
1. Push perubahan ke branch di GitHub.
2. Buka repository di GitHub.
3. Klik `Pull Request` > `New Pull Request`.
4. Pilih branch yang ingin digabungkan ke `main`.
5. Klik `Create Pull Request`, tambahkan deskripsi, lalu klik `Merge` setelah disetujui.

## 9. **Mengatasi Konflik Merge**
Jika ada konflik saat merge:
1. Edit file yang bermasalah.
2. Simpan perubahan dan jalankan:
```sh
git add .
git commit -m "Resolve merge conflict"
git push origin main
```

## 10. **Menghapus Repository di GitHub**
1. Buka repository di GitHub.
2. Masuk ke `Settings` > `Danger Zone`.
3. Klik `Delete this repository`.
4. Konfirmasi dengan mengetik nama repository.

---
✨ **Selamat belajar GitHub! 🚀**

