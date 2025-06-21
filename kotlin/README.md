# Kotlin TB Scoring Example

File `TbScoring.kt` menunjukkan implementasi logika penilaian risiko TB dalam bahasa Kotlin.

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
