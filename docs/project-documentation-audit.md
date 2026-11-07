# Audit dokumentasi project portfolio

Tanggal audit: 7 November 2026.

## Kesimpulan

Dokumentasi 14 project telah menjelaskan konteks, sasaran pengguna, tujuan, fokus antarmuka, dan materi yang tersedia. Materi tersebut belum cukup untuk menyatakan bahwa seluruh proses bisnis, proses desain Aisyah, dan hasil validasinya telah didokumentasikan secara lengkap.

Ada dua hal yang berbeda untuk dilengkapi:

1. **Proses produk/bisnis:** siapa melakukan apa, pemicu aktivitas, data yang diperlukan, aturan keputusan, perubahan status, penanganan kegagalan, dan hasil akhirnya.
2. **Proses desain:** masalah yang benar-benar ditemukan, kontribusi Aisyah, bukti yang dipakai, alternatif yang dipertimbangkan, alasan keputusan, iterasi, dan hasil evaluasi.

Penambahan uraian tampilan saja tidak membuktikan kedua proses tersebut. Dokumentasi publik sekarang membedakan aktivitas konsep dengan jalur tugas yang terlihat di preview. Analisis antarmuka merupakan pembacaan terhadap materi saat audit, bukan rekonstruksi keputusan historis Aisyah.

Website informasi tidak perlu dipaksa memiliki alur checkout. Untuk project seperti profil sekolah atau perusahaan, lingkup yang tepat dapat berakhir pada penemuan informasi dan jalur kontak. Untuk link hub, perpindahan ke tujuan eksternal merupakan batas lingkup yang masuk akal.

## Sumber dan batas pemeriksaan

- [Ringkasan, tautan, tahun, dan pilihan project](../src/data/project.ts).
- [Konteks dan fokus project](../src/data/project-catalog.ts).
- [Preview project yang tersedia di repo](../public/images/projects/).
- [Peta aktivitas berdasarkan materi yang tersedia](../src/data/project-documentation.ts).
- [Catatan pengalaman dan penghargaan](../src/data/experience.ts). Catatan umum ini tidak membuktikan pembagian kerja atau penghargaan untuk project tertentu tanpa penghubung yang jelas.
- Case study Behance Meal Up, Plantify, dan LiTerm menolak pembacaan otomatis dengan HTTP 403 saat audit. Isi lengkapnya belum diperiksa. Tidak ada kesimpulan yang diambil dari project orang lain dengan nama serupa.
- Tautan Figma merupakan rujukan materi, bukan bukti bahwa setiap jalur prototipe, seluruh aturan bisnis, atau hasil pengujian telah diperiksa.

Pernyataan seperti riset Smart Waste dengan 13 warga Bandung berasal dari ringkasan repo. Catatan metode, pertanyaan, temuan, dan bukti hasilnya belum tersedia untuk audit ini.

## Ringkasan per project

| Project | Lingkup yang dapat dipaparkan sekarang | Kelengkapan proses bisnis |
| --- | --- | --- |
| Meal Up | Hubungan penyedia surplus makanan dan penerima komunitas | Model konseptual; operasional redistribusi belum terverifikasi |
| Plantify | Aktivitas perawatan, challenge, reward, komunitas, dan scanner yang diusulkan | Fitur konsep; aturan dan perpindahan status belum terverifikasi |
| LiTerm | Penemuan buku dan tujuan progres membaca | Aktivitas konsep; akses bacaan dan pencatatan progres belum terverifikasi |
| Smart Waste | Masuk/daftar, dashboard, dan titik awal deposit/challenge/redeem | Sebagian antarmuka; proses deposit sampai poin belum terverifikasi |
| SMKN 2 Sumedang | Profil, program studi, informasi, dan jalur kontak | Jalur informasi; pengelolaan konten dan hasil tugas belum diperiksa |
| E-Voting Osis | Countdown dan titik awal voting/hasil/pendaftaran | Halaman masuk; kelayakan pemilih dan pencatatan suara belum terverifikasi |
| I-SEA | Direktori cohort dan navigasi informasi program | Penjelajahan informasi; pendaftaran dan seleksi belum terverifikasi |
| BIONESIA | Misi, program, portfolio, resources, dan kontak | Jalur informasi; siklus publikasi dan kolaborasi belum terverifikasi |
| Ghia Farm | Profil bisnis, penawaran bunga, dan jalur produk/kontak | Titik awal minat produk; pemesanan belum terverifikasi |
| Pionicon | Halaman About dan navigasi studio/licensing/stories | Jalur profil; alur inquiry dan licensing belum terverifikasi |
| Pionicon Creative Agency | Pemilihan link agency atau store | Lingkup navigasi terlihat; penyelesaian di layanan eksternal di luar preview |
| MEVERS | Pengenalan metaverse dan navigasi konten edukasi | Jalur konten; layanan pembelajaran interaktif belum terverifikasi |
| GROJUNIO | Pengenalan program, kategori, pelatihan, event, dan masuk/daftar | Titik awal pembelajaran; enrollment dan progres belum terverifikasi |
| JanGi | Pengenalan jajanan, tombol mulai, menu, dan kontak | Penemuan jajanan; alur pemesanan belum terverifikasi |

## Audit rinci dan bahan yang diperlukan

### 1. Meal Up

**Sudah didukung:** konsep menghubungkan bisnis yang memiliki surplus makanan dengan komunitas penerima. Preview lokal merupakan cover bertanda nama Aisyah dan tahun 2025.

**Proses bisnis yang perlu dikonfirmasi:** siapa yang boleh menjadi penyedia dan penerima; informasi makanan yang wajib diisi; jumlah dan batas ketersediaan; bagaimana penerima mengajukan permintaan; siapa yang menyetujui; penanganan lebih dari satu peminat; pengambilan atau pengantaran; bukti serah-terima; pembatalan dan makanan yang sudah tidak tersedia. Konfirmasi apakah transaksi gratis, berbayar, atau bentuk lain sebelum menjelaskan modelnya.

**Bukti desain yang diperlukan:** bagian yang Aisyah kerjakan, alur dua pihak, layar detail makanan, status permintaan, dan satu keputusan desain beserta dasar serta iterasinya. Kirim teks atau export case study untuk memeriksa materi di balik cover.

**Prioritas dokumentasi:** satu diagram penyedia–penerima dengan pemicu, langkah utama, perubahan status, serta batas tanggung jawab platform. Lengkapi hanya dengan aturan yang benar-benar dirancang.

### 2. Plantify

**Sudah didukung:** brief menyebut daily challenge, reward, komunitas, dan scanner AI yang diusulkan. Cover lokal menampilkan nama Aisyah dan tahun 2025.

**Proses bisnis yang perlu dikonfirmasi:** bagaimana tanaman ditambahkan atau dipilih; asal tugas perawatan; syarat challenge selesai; aturan pemberian dan penggunaan reward; hubungan aktivitas dengan progres; alur unggahan dan interaksi komunitas; izin kamera; kondisi gambar tidak terbaca atau hasil scanner tidak pasti. Jangan mengasumsikan jadwal pengingat, diagnosis penyakit, atau integrasi AI yang berfungsi dari nama fitur saja.

**Bukti desain yang diperlukan:** alur perawatan utama, layar challenge dan reward, keadaan kosong/gagal yang memang dirancang, sumber pengetahuan tentang pengguna, serta perubahan setelah evaluasi bila pernah dilakukan.

**Prioritas dokumentasi:** pisahkan siklus perawatan harian, aktivitas komunitas, dan scanner. Hubungkan ketiganya hanya bila keterhubungan tersebut ada dalam desain asli.

### 3. Literacy Modern / LiTerm

**Sudah didukung:** konsep perpustakaan digital untuk siswa dengan curated books dan progress goals. Cover lokal memperlihatkan identitas LiTerm, buku, nama Aisyah, dan tahun 2025.

**Proses bisnis yang perlu dikonfirmasi:** cara menemukan dan memilih buku; isi halaman detail; cara memperoleh atau membuka bacaan; akses gratis/berlangganan/peminjaman bila relevan; penyimpanan posisi baca; definisi satuan progres; pembaruan target; kondisi buku tidak tersedia; hak akses dan pengelolaan katalog. Jangan menambahkan fitur peminjaman atau pembayaran tanpa bukti.

**Bukti desain yang diperlukan:** alur menemukan buku sampai aktivitas membaca dan progres, layar yang mendukungnya, kontribusi pribadi, serta dasar pemilihan fitur dan penilaian keterbacaan.

**Prioritas dokumentasi:** dokumentasikan satu tugas membaca utama secara utuh, kemudian jelaskan bagaimana progres mendukung tugas itu.

### 4. Smart Waste

**Sudah didukung:** preview onboarding dan dashboard; saldo poin; informasi berat, suhu, dan status tempat sampah; titik masuk Waste Deposit, Waste Challenges, dan Redeem Points. Brief repo menyebut riset dengan 13 warga Bandung.

**Proses bisnis yang perlu dikonfirmasi:** siapa menerima dan memverifikasi setoran; pemilihan lokasi/waktu bila ada; jenis dan satuan sampah; asal data sensor; konversi berat ke poin; kapan poin diterbitkan; syarat penukaran; penolakan setoran, lokasi penuh, data belum diperbarui, dan saldo tidak cukup. Tampilan sensor tidak membuktikan adanya perangkat terintegrasi.

**Bukti desain yang diperlukan:** metode dan temuan riset, hubungan temuan dengan keputusan dashboard, peran dalam tim, layar sesudah memilih Waste Deposit, dan bukti evaluasi jika dilakukan.

**Prioritas dokumentasi:** urutkan setoran–verifikasi–penerbitan poin–penukaran sesuai desain asli, dengan satu contoh status gagal yang memang dirancang.

### 5. Website SMKN 2 Sumedang

**Sudah didukung:** pengenalan sekolah, program studi, profil, ekstrakurikuler, berita, alamat, telepon, email, dan jalur kontak.

**Proses bisnis yang perlu dikonfirmasi:** tugas utama pengunjung yang menjadi sasaran; alur mencari informasi jurusan; tujuan tindakan Contact Us; siapa memperbarui program dan berita; keterkaitan dengan penerimaan siswa jika memang termasuk lingkup. Jangan menyamakan website profil dengan sistem pendaftaran siswa.

**Bukti desain yang diperlukan:** halaman yang Aisyah desain atau implementasikan, asal desain visual, struktur konten, batas kerja terhadap konten sekolah, serta contoh evaluasi pencarian informasi.

**Prioritas dokumentasi:** satu perjalanan calon siswa atau orang tua untuk menemukan program dan kontak. Nyatakan lingkup front-end dan kolaborasi sesuai pekerjaan sebenarnya.

### 6. E-Voting Osis

**Sudah didukung:** informasi waktu pemilihan dan kartu untuk voting, hasil, serta pendaftaran.

**Proses bisnis yang perlu dikonfirmasi:** definisi pendaftaran; verifikasi kelayakan; pembukaan/penutupan voting; pemilihan kandidat; konfirmasi sebelum mengirim; ketentuan satu suara; bukti suara tersimpan; kapan hasil ditampilkan; peran panitia; penanganan suara ganda, pemilih tidak memenuhi syarat, atau pemilihan berakhir. Jangan mengklaim integritas atau keamanan pemilihan dari preview halaman masuk.

**Bukti desain yang diperlukan:** alur pemilih dan panitia yang benar-benar dibuat, layar konfirmasi dan hasil, tanggung jawab Aisyah, serta keputusan untuk mengurangi kesalahan saat memilih.

**Prioritas dokumentasi:** jelaskan kondisi sebelum, selama, dan setelah pemilihan, beserta batas lingkup antarmukanya.

### 7. I-SEA

**Sudah didukung:** direktori peserta per cohort, informasi program, mentor, stories, changemakers, dan titik awal masuk/daftar.

**Proses bisnis yang perlu dikonfirmasi:** apakah peran project mencakup pendaftaran; tahapan aplikasi; syarat peserta; status seleksi; hubungan cohort dengan peserta; pengelolaan profil dan bahasa. Ketersediaan tombol Daftar tidak membuktikan keseluruhan proses seleksi.

**Bukti desain yang diperlukan:** halaman atau komponen yang Aisyah kerjakan, desain sumber, kolaborasi dengan tim, aturan pengelompokan konten, dan batas antara implementasi halaman dengan layanan program.

**Prioritas dokumentasi:** paparkan tugas menelusuri cohort dan profil enterprise. Tambahkan alur aplikasi hanya bila berada dalam lingkup pekerjaan dan ada materinya.

### 8. BIONESIA

**Sudah didukung:** pengenalan misi konservasi, navigasi program, blog, portfolio, resources, kontak, dan pilihan bahasa.

**Proses bisnis yang perlu dikonfirmasi:** tugas publik yang paling penting; hubungan program dengan portfolio dan resources; cara pengunjung menghubungi organisasi; apakah ada proses unduh/publikasi resource; siapa memperbarui informasi. Jangan menambahkan donasi atau pendaftaran relawan tanpa materi.

**Bukti desain yang diperlukan:** tanggung jawab Aisyah terhadap halaman, sumber desain dan aset, struktur kategori, responsivitas yang benar-benar dikerjakan, dan evaluasi akses informasi jika tersedia.

**Prioritas dokumentasi:** satu perjalanan dari misi organisasi ke program, resource, atau kontak sesuai struktur situs sebenarnya.

### 9. Ghia Farm

**Sudah didukung:** pengenalan farm, visual produk bunga, Buy Now, Learn More, Products, Blog, dan Contact Us.

**Proses bisnis yang perlu dikonfirmasi:** tujuan Buy Now; apakah produk hanya katalog atau dapat dipesan; siapa menangani inquiry; informasi produk yang diperlukan; peran ketersediaan dan harga jika ada; pemesanan serta tindak lanjut di luar website. Jangan mengasumsikan keranjang, pembayaran, atau checkout.

**Bukti desain yang diperlukan:** halaman produk dan kontak, sumber desain, bagian implementasi pribadi, serta alasan hierarki informasi yang didukung catatan project.

**Prioritas dokumentasi:** jelaskan batas antara penjelajahan produk dan pemesanan/inquiry, lalu dokumentasikan perpindahan ke kanal berikutnya jika memang dirancang.

### 10. Pionicon

**Sudah didukung:** halaman About, breadcrumb, ilustrasi studio, serta navigasi Licensing, Studios, Stories, dan Contact.

**Proses bisnis yang perlu dikonfirmasi:** jenis informasi licensing yang disediakan; hubungan halaman studio dengan layanan; jalur inquiry; pihak penerima permintaan; batas antara penjelasan layanan dan negosiasi lisensi di luar situs.

**Bukti desain yang diperlukan:** kontribusi Aisyah pada struktur dan implementasi, kredit ilustrasi dan identitas merek, halaman yang benar-benar dikerjakan, serta keputusan presentasi konten.

**Prioritas dokumentasi:** gambarkan tugas mengenal studio dan menemukan jalur layanan atau kontak. Kredit aset visual terpisah dari kontribusi antarmuka.

### 11. Pionicon Creative Agency

**Sudah didukung:** direktori tautan yang memisahkan Creative Agency dan Store; tujuan projects, stories, LinkedIn, Instagram, Web, dan Tokopedia.

**Proses bisnis yang perlu dikonfirmasi:** tujuan tiap link saat project dibuat; siapa mengelola perubahan tujuan; penamaan yang disepakati; lingkup yang memang berakhir pada perpindahan ke kanal eksternal. Proses checkout di layanan eksternal bukan otomatis bagian dari pekerjaan ini.

**Bukti desain yang diperlukan:** kontribusi pribadi pada layout, pengelompokan, dan implementasi; sumber ilustrasi; batas keputusan desain yang diberikan oleh brand.

**Prioritas dokumentasi:** buat peta niat pengunjung–kelompok tautan–tujuan. Kasus sederhana ini dapat dijelaskan dengan lengkap tanpa mengarang proses bisnis tambahan.

### 12. MEVERS

**Sudah didukung:** website edukasi bertema metaverse dengan navigasi About, Article, Member, Present, dan Our Team.

**Proses bisnis yang perlu dikonfirmasi:** fungsi sebenarnya dari Member dan Present; tujuan pembelajaran; alur akses konten; apakah ada akun, kelas, atau aktivitas interaktif; batas antara edukasi tentang metaverse dan pengalaman metaverse yang dijalankan.

**Bukti desain yang diperlukan:** lingkup desain dan front-end Aisyah, kerja individu/tim, halaman pendukung, serta alasan pemilihan penyajian konten. Hubungkan penghargaan hanya bila nama project dan kontribusinya terkonfirmasi.

**Prioritas dokumentasi:** jelaskan satu perjalanan pengunjung dari pengenalan topik ke konten pendukung yang tersedia.

### 13. GROJUNIO

**Sudah didukung:** konsep platform peningkatan keterampilan teknologi untuk pelajar, dengan Categories, Training, Events, Sign In, dan Register.

**Proses bisnis yang perlu dikonfirmasi:** hubungan kategori dengan pelatihan/event; detail program; syarat masuk; proses pendaftaran; enrollment; akses materi; status progres atau penyelesaian jika memang ada. Jangan menambahkan sertifikat atau pembayaran dari asumsi tentang platform belajar.

**Bukti desain yang diperlukan:** alur yang tersedia di Figma, halaman yang Aisyah desain, kontribusi tim, keputusan informasi, serta konteks lomba bila memang terkait project ini.

**Prioritas dokumentasi:** petakan penemuan program sampai langkah pendaftaran terakhir yang benar-benar didesain.

### 14. JanGi

**Sudah didukung:** konsep penemuan jajanan sekolah, tombol Mulai, Menu, About, Contact, dan Sign In.

**Proses bisnis yang perlu dikonfirmasi:** tujuan Mulai; informasi di menu dan detail jajanan; apakah ada penjual/lokasi kantin; fungsi akun; apakah cakupannya penemuan, pemesanan, atau keduanya; proses sesudah pemilihan jajanan. Jangan menyimpulkan adanya layanan pemesanan dari tema makanan.

**Bukti desain yang diperlukan:** layar dan jalur pada prototype, peran Aisyah, individu/tim, alasan penggunaan tema nostalgia, serta perubahan berdasarkan evaluasi jika ada.

**Prioritas dokumentasi:** jelaskan perjalanan penemuan jajanan sampai tujuan akhir dalam prototype, kemudian pisahkan bagian yang berupa konsep bisnis lanjutan.

## Format case study ketika bukti tersedia

Gunakan bagian sesuai lingkup project, tanpa memaksa semua project menjadi studi UX end-to-end:

1. **Ringkasan dan lingkup:** masalah, pengguna, tujuan, jenis project, waktu, tim, kontribusi pribadi, dan apa yang berada di luar lingkup.
2. **Bukti kebutuhan:** sumber brief atau riset yang benar-benar dilakukan, temuan utama, dan batas pengetahuannya.
3. **Model proses:** aktor, pemicu, alur utama, titik keputusan, status, aturan, alternatif/gagal, dan hasil akhir. Sertakan diagram hanya untuk alur yang sudah terkonfirmasi.
4. **Keputusan desain:** masalah spesifik, alternatif, pilihan, alasan, dan artefak yang menunjukkan penerapannya. Bedakan alasan historis dari analisis saat ini.
5. **Iterasi dan evaluasi:** versi sebelum/sesudah, tugas pengujian, metode, hasil aktual, serta revisi. Bila tidak diuji, jelaskan lingkup eksplorasi yang dilakukan.
6. **Hasil dan refleksi:** deliverable yang benar-benar selesai, pembelajaran pribadi, batas implementasi, dan langkah lanjutan. Gunakan metrik hanya jika ada cara pengukuran dan bukti hasilnya.

Untuk website yang pekerjaannya implementasi front-end dari desain orang lain, paparkan tanggung jawab tersebut secara jelas. Ketelitian implementasi, struktur konten, dan kolaborasi merupakan kontribusi yang dapat didokumentasikan tanpa mengklaim seluruh proses UX.

## Cara mengirim bahan pelengkap

Mulai dari Meal Up, Plantify, dan LiTerm yang tampil di homepage. Untuk masing-masing, cukup kirim catatan mentah dengan isi:

- Individu atau tim, siapa mengerjakan apa, serta bagian yang Aisyah kerjakan.
- Pemicu project, waktu pengerjaan, tujuan, dan batas lingkup.
- Satu tugas pengguna dari awal sampai akhir, termasuk aturan dan kondisi gagal yang memang dirancang.
- Riset yang dilakukan, temuan yang memengaruhi desain, dan artefak pendukungnya.
- Satu keputusan atau iterasi yang paling penting dan alasannya.
- Evaluasi yang dilakukan serta hasil aktual, bila ada.
- Deliverable, kredit aset, dan bagian yang masih berupa konsep.

Bahan bisa berupa teks case study, export board, screenshot alur, atau catatan project. Tambahkan ke dokumentasi publik setelah pernyataannya dapat ditelusuri ke sumber tersebut. Pertanyaan pada audit ini merupakan pekerjaan pengumpulan informasi, bukan daftar fitur yang dianggap sudah dibuat.
