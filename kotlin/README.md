# Kotlin TB Scoring Example

File `TbScoring.kt` menunjukkan implementasi logika penilaian risiko TB dalam bahasa Kotlin. Selain kode logika, tersedia berkas `assessment_layout.xml` yang memberikan contoh tata letak (layout) Android untuk menampilkan form penilaian.

## Menjalankan Contoh

1. Pastikan JDK dan Kotlin compiler (`kotlinc`) telah terpasang di komputer Anda.
2. Kompilasi file menggunakan:
   ```sh
   kotlinc TbScoring.kt -include-runtime -d TbScoring.jar
   ```
3. Jalankan program contoh dengan:
   ```sh
   java -jar TbScoring.jar
   ```

Program contoh akan menghitung skor dari jawaban sampel dan menampilkan total skor beserta tingkat risikonya.

Layout `assessment_layout.xml` dapat diimpor ke dalam proyek Android untuk membuat tampilan form penilaian.
