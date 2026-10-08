// ============================================================
// 1) WAJIB: ganti dengan URL /exec dari Apps Script
//    (Deploy > Manage deployments > Web app URL). Tetap di dalam tanda kutip.
// 2) OPSIONAL: desain tiket & halaman berhasil check-in milik Anda.
//    Unggah gambar desain ke repository GitHub ini, lalu isi namanya di 'bg'.
//    Kosongkan 'bg' ('') untuk memakai tampilan polos bawaan.
//
//    Semua posisi dalam PERSEN dari desain (x = dari kiri, y = dari atas, titik tengah elemen).
//    w = lebar elemen (persen). size = ukuran huruf (persen dari lebar desain).
//    Pratinjau tanpa token (tambah &grid=1 untuk garis bantu tiap 10%):
//      .../ticket.html?demo=pend     (tampilan tiket + QR)
//      .../ticket.html?demo=ok       (tampilan berhasil check-in)
// ============================================================
window.APP = {
  API_URL: 'https://script.google.com/macros/s/AKfycbznNMVAH9I8sMuFZXAXJ5YBnaN7n7EW5Wh-0F-k33BdZcGGTPw-RBA2Fd8POK8u_RnS3w/exec',

  DESIGN: {
    width: 1080, height: 1920,        // ukuran desain Anda (piksel); yang dipakai hanya perbandingannya
    color: '#ffffff',                 // warna huruf bawaan
    font: 'system-ui, sans-serif',    // nama font (opsional: isi fontUrl dengan link Google Fonts)
    fontUrl: '',
    letterbox: '#000000',             // warna sisi kosong bila layar tidak sama rasio dengan desain

    // Halaman tiket (sebelum check-in): ada QR untuk dipindai petugas
    ticket: {
      bg: '',                         // contoh: 'tiket-bg.png'
      nama:   { x: 50, y: 34, w: 84, size: 7 },
      divisi: { x: 50, y: 41, w: 84, size: 4.5, weight: 500 },
      qr:     { x: 50, y: 66, w: 52 },
      token:  { x: 50, y: 88, size: 3.6, weight: 500 }
    },

    // Halaman setelah petugas scan (berhasil check-in)
    success: {
      bg: 'sukses-bg.png',                         // contoh: 'sukses-bg.png'
      nama:   { x: 50, y: 48, w: 84, size: 8 },
      divisi: { x: 50, y: 55, w: 84, size: 5, weight: 500 },
      waktu:  { x: 50, y: 62, size: 4, weight: 500 }
    }
  }
};
