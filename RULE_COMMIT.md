Dokumen ini berisi aturan standar penulisan pesan commit agar konsisten, mudah dipahami, dan sesuai praktik terbaik.

## 1. Tipe Standar Utama (Inti Aplikasi)
Digunakan untuk perubahan yang langsung berdampak pada fungsi atau struktur kode utama aplikasi:

- **feat**: Menambahkan fitur baru ke dalam codebase.
- **fix**: Memperbaiki bug, error, atau kerusakan pada aplikasi.
- **refactor**: Menata ulang kode tanpa mengubah perilaku (bukan bugfix atau fitur baru).
- **perf**: Perubahan kode untuk meningkatkan performa atau kecepatan aplikasi.

---

## 2. Tipe Pendukung & Infrastruktur
Digunakan untuk perubahan yang tidak langsung memengaruhi logika aplikasi, tetapi mendukung pengembangan:

- **docs**: Perubahan pada dokumentasi (README, JSDoc, wiki, manual).
- **style**: Perubahan format/tampilan kode tanpa memengaruhi logika (spasi, linting, typo).
- **test**: Menambah, memperbaiki, atau mengubah kode pengujian (unit, integration, e2e).
- **build**: Perubahan pada sistem build atau dependensi eksternal (Webpack, npm, Gradle).
- **ci**: Perubahan konfigurasi CI/CD (GitHub Actions, GitLab CI, Jenkins, Dockerfile).
- **chore**: Perubahan umum harian yang tidak memengaruhi aplikasi maupun pengujian (misal: update `.gitignore`, hapus log).

---

## 3. Tipe Khusus Manajemen Git & Rilis
Digunakan untuk alur kerja Git atau penandaan versi rilis:

- **revert**: Membatalkan commit sebelumnya (rollback).
- **release**: Commit khusus untuk menandai versi baru aplikasi (version bump).
- **merge**: Menandai penggabungan branch (jika pesan merge ditulis manual).

---

## 4. Tipe Tambahan Komunitas (Opsional)
Digunakan sesuai kebutuhan tim atau komunitas:

- **wip**: Work In Progress, kode belum selesai tetapi perlu disimpan.
- **security**: Perubahan untuk memperbaiki celah keamanan.
- **deprecate**: Menandai kode lama yang akan segera dihapus.
- **remove**: Menghapus fitur, kode, atau berkas yang tidak digunakan lagi.
- **ui**: Perubahan khusus pada tampilan visual (CSS, desain, layout).

---

## 📌 Format Pesan Commit
Gunakan format berikut:

