# Pengujian Sistem Booking

## Tujuan
Tujuan dari pengujian ini adalah untuk memastikan bahwa sistem booking dapat mendeteksi masalah harga yang tidak sesuai dan adanya double booking.

## Skenario Pengujian 1: Deteksi Harga Tidak Sesuai
- **Deskripsi**: Memastikan bahwa harga yang ditampilkan pada saat pemesanan sesuai dengan yang diharapkan untuk tanggal dan waktu yang dipilih.
- **Langkah-langkah**:
  1. Buka halaman pemesanan.
  2. Pilih tanggal dan waktu.
  3. Lakukan pemesanan.
  4. Periksa harga yang ditampilkan.
- **Harapan**:
  - Harga yang tersimpan akan ditampilkan sesuai dengan yang diharapkan.

## Skenario Pengujian 2: Deteksi Double Booking
- **Deskripsi**: Memastikan bahwa sistem dapat mendeteksi adanya double booking untuk tanggal dan waktu yang sama.
- **Langkah-langkah**:
  1. Buka halaman pemesanan.
  2. Pilih tanggal dan waktu.
  3. Lakukan pemesanan.
  4. Kembali ke halaman pemesanan.
  5. Pilih tanggal dan waktu yang sama.
  6. Lakukan pemesanan kembali.
- **Harapan**:
  - Sistem menampilkan pesan peringatan "Double booking detected."

## Panduan Penggunaan Skrip Otomatisasi
1. Clone repository menggunakan perintah ``
2. Masuk ke directory hasil clone repository
3. Jalankan perintah `npm install` untuk melakukan setup
- Jika ingin menggunakan CLI
4. Jalankan perintah `npx cypress run --spec "cypress/e2e/bookingtest.spec.cy.js"` untuk menjalankan tes.
- Jika ingin menggunakan GUI
4. Jalankan perintah `npx cypress open` untuk membuka Cypress Test Runner.
5. Pilih skrip pengujian `bookingtest.spec.cy.js` untuk dijalankan.

---

Sebelum menjalankan automation test, pastikan untuk menyesuaikan URL, elemen-elemen, dan asumsi pengujian sesuai dengan kebutuhan proyek.