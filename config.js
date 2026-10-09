// ======================================================================
// WAJIB: ganti ISI_URL_EXEC_DI_SINI dengan URL /exec dari Apps Script
//        (Deploy > Manage deployments > Web app URL). Tetap di dalam tanda kutip.
// Selebihnya OPSIONAL. Posisi memakai PERSEN dari desain 1080 x 1920 (titik tengah elemen):
//   x = dari kiri, y = dari atas, w = lebar kotak, h = tinggi kotak (untuk ukuran otomatis)
//   size = ukuran huruf (persen lebar desain), weight, color, font, letterSpacing, uppercase,
//   italic, lineHeight, shadow, align, min (ukuran huruf terkecil saat nama panjang dikecilkan)
//   Khusus tombol: bg (warna latar), radius (sudut), pad (jarak dalam)
// Pratinjau tanpa token (tambah &grid=1 untuk garis bantu 10%):
//   .../ticket.html?demo=cover   sampul "Buka Undangan"
//   .../ticket.html?demo=pend    tiket + QR
//   .../ticket.html?demo=ok      berhasil check-in
//   .../ticket.html?demo=cover&sim=1   uji getar di HP: ketuk sampul, 5 detik kemudian "berhasil"
// ======================================================================
window.APP = {
  API_URL: 'https://script.google.com/macros/s/AKfycbxgeoQMZzuhvBYeS4pcfnEX15s4pMLFN-QeXy3NcMQjUXO0ZakmOWjOByNd46WbhVxTSg/exec',

  // --- Getar & sampul ---
  COVER: true,                                  // false = tanpa sampul "Buka Undangan"
  COVER_TEKS: { salam: 'Kepada Yth.', ajakan: 'Anda diundang secara khusus', tombol: 'Buka Undangan' },
  VIBRATE: [200, 120, 200],           // pola getar (milidetik); false = mati
  SOUND: 'auto',                                // bunyi hanya bila HP tidak bisa bergetar (iPhone) | true | false

  // --- Desain (kosongkan 'bg' bila ingin tampilan polos bawaan) ---
  DESIGN: {
    width: 1080, height: 1920,
    color: '#ffffff',
    font: "'Poppins', system-ui, sans-serif",
    fontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap',
    letterbox: '#0A1A3E',                       // samakan dengan warna tepi desain

    // Sampul "Buka Undangan" (tampil sebelum tiket)
    cover: {
      bg: 'cover-bg.png',
      nama:   { x: 50, y: 42,   w: 84, h: 9,   size: 8,   weight: 700, lineHeight: 1.1, min: 4.5 },
      divisi: { x: 50, y: 49.5, w: 84, h: 5.5, size: 4.8, weight: 500, color: '#F0D678', min: 3.2 },
      tombol: { x: 50, y: 64,   w: 62, size: 5, weight: 700, color: '#0A1A3E', bg: '#F0D678', radius: 3.2, pad: 2.4 }
    },

    // Tiket + QR (sebelum check-in)
    ticket: {
      bg: 'tiket-bg.png',
      nama:   { x: 50, y: 28, w: 84, h: 9,   size: 7,   weight: 700, lineHeight: 1.1, min: 4 },
      divisi: { x: 50, y: 36, w: 84, h: 5.4, size: 4.5, weight: 500, color: '#F0D678', min: 3 },
      qr:     { x: 50, y: 61, w: 58 },                       // kotak QR putih 626 px (di 1080)
      token:  { x: 50, y: 81, size: 3.6, weight: 500, color: '#F0D678', letterSpacing: 0.5 }
    },

    // Layar berhasil check-in
    success: {
      bg: 'sukses-bg.png',
      nama:   { x: 50, y: 45, w: 84, h: 10, size: 8, weight: 700, lineHeight: 1.1, min: 4.5 },
      divisi: { x: 50, y: 54, w: 84, h: 6,  size: 5, weight: 500, color: '#F0D678', min: 3.2 },
      waktu:  { x: 50, y: 62, size: 4, weight: 500, color: 'rgba(255,255,255,.88)' }
    }
  }
};
