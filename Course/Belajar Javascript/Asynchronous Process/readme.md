# Belajar Asynchronous Process

Asynchronous Process adalah metode eksekusi di mana suatu operasi dapat berjalan di latar belakang tanpa menghentikan eksekusi utama dari suatu program. Ini sangat berguna untuk meningkatkan performa dan efisiensi, terutama dalam menangani operasi I/O seperti membaca file, permintaan jaringan, atau akses database.

## 📌 Mengapa Menggunakan Asynchronous Process?
- Menghindari blocking (penghentian sementara eksekusi utama)
- Meningkatkan efisiensi CPU
- Meningkatkan performa aplikasi, terutama dalam operasi I/O
- Memungkinkan eksekusi beberapa tugas secara paralel

## 🚀 Implementasi Asynchronous dalam Berbagai Bahasa

### 1. JavaScript (Node.js - Async/Await)
```javascript
const fetch = require('node-fetch');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
```

### 2. Python (Asyncio)
```python
import asyncio
import aiohttp

async def fetch_data():
    async with aiohttp.ClientSession() as session:
        async with session.get('https://jsonplaceholder.typicode.com/todos/1') as response:
            data = await response.json()
            print(data)

asyncio.run(fetch_data())
```

### 3. Java (CompletableFuture)
```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class AsyncExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello, Asynchronous Java!";
        });
        System.out.println(future.get());
    }
}
```

## 🔥 Perbedaan Synchronous vs Asynchronous
| Synchronous | Asynchronous |
|-------------|-------------|
| Eksekusi berjalan satu per satu | Eksekusi bisa berjalan bersamaan |
| Blokir eksekusi utama sampai selesai | Tidak menghentikan eksekusi utama |
| Contoh: Looping for biasa | Contoh: Callback, Promise, Async/Await |

## 📚 Referensi
- [MDN Web Docs - Async JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [Java CompletableFuture](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/CompletableFuture.html)

Semoga bermanfaat! 🚀
