# 🎮 ReverseGuessChar - Tebak Karakter Reverse 1999!

![Banner](https://images.rpgsite.net/image/da49c9a1/130719/original/Reverse-1999_20231019_KeyVisual.jpg)

Sebuah website game sederhana berbasis HTML/CSS/JavaScript untuk menebak karakter dari game **Reverse: 1999**! Game ini menantang kamu untuk menebak nama karakter berdasarkan inisial, jenis damage, dan afflatus.

---

## 🧩 Fitur Utama

- 🎯 **Tebak nama karakter** dari daftar karakter Reverse:1999.
- 💡 **Clue dinamis**: petunjuk inisial, jenis damage, dan afflatus akan diberikan.
- 🔄 **Round otomatis** setelah menang atau kalah.
- 📈 **Score sistem berbasis localStorage**: skor kamu akan disimpan walaupun di-refresh.
- 📜 **List karakter** ditampilkan di bawah dengan tampilan animasi menarik.
- 🖼️ **Background dan karakter animasi** membuat pengalaman visual lebih menarik.
- 📱 **Responsive Design** untuk berbagai ukuran layar.
- 🎨 **Desain pop-up animasi** saat elemen masuk viewport.

---

## 🕹️ Cara Bermain

1. Masukkan tebakan nama karakter ke kolom input.
2. Klik **Tebak**.
3. Jika salah:
   - Kamu akan diberi petunjuk:
     - Inisial karakter
     - Jenis damage (Reality / Mental)
     - Afflatus (Mineral, Plant, Beast, dsb.)
4. Kamu memiliki **5 kesempatan** sebelum game reset.
5. Jika benar, kamu menang dan skor bertambah!

---

## 🗂️ Struktur Proyek


ReverseGuessCharWebsite/
│
├── index.html # Halaman utama game
├── index.js # Script logika game
├── css/
│ └── index.css # Styling halaman
└── img/
├── *.webp # Ikon karakter & background
└── *.gif # Animasi karakter


---

## 🧠 Karakter Yang Bisa Ditebak

Berada di dalam array `characters[]` di file `index.js`. Contoh:

```js
{ name: 'Vertin', Damage: 'Unknown', Afflatus: 'Unknown', initials: 'V', img: 'Vertin_Icon.webp' }
```
Kamu bisa menambahkan karakter baru cukup dengan menambah elemen baru ke array tersebut.

---

## 🛠 Teknologi Yang Digunakan

--💻 HTML5
--🎨 CSS3 (dengan animasi & responsive design)
--⚙️ JavaScript (DOM Manipulation & Game Logic)
--📦 LocalStorage API (untuk simpan skor)

---
## ✍️ Credits
Dibuat oleh: Rucky

Inspired by: Game Reverse:1999

Animasi & gambar diambil dari fankit resmi atau hasil kompresi bebas.

---

## ⚖️ License
This project is open-source and free to use for learning or fun.
Do not redistribute with commercial purpose without permission.


## 🎉 Thank you for playing and visiting the project!
