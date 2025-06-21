// Implementasi logika penilaian risiko TB versi Kotlin
// Setiap bagian kode disertai penjelasan dalam bahasa Indonesia

// Data class untuk opsi jawaban pada setiap pertanyaan
data class Option(
    val value: Int,     // nilai yang dipilih pengguna
    val label: String,  // deskripsi pilihan
    val points: Int     // poin yang diberikan pilihan ini
)

// Data class untuk pertanyaan di dalam kategori tertentu
data class Question(
    val id: String,            // id unik pertanyaan
    val question: String,      // teks pertanyaan
    val options: List<Option>  // daftar opsi yang tersedia
)

// Data class untuk kategori, mewadahi beberapa pertanyaan
data class Category(
    val name: String,                // nama kategori
    val questions: List<Question>    // pertanyaan-pertanyaan di dalam kategori
)

// Enum untuk tingkatan risiko TB
enum class RiskLevel { RENDAH, SEDANG, TINGGI }

// Data class hasil perhitungan skor
data class ScoreResult(
    val totalScore: Int,  // jumlah skor yang diperoleh
    val maxScore: Int,    // skor maksimum yang mungkin dicapai
    val riskLevel: RiskLevel // tingkat risiko berdasarkan total skor
)

// Daftar kategori beserta pertanyaan dan opsi penilaiannya
val assessmentCriteria: List<Category> = listOf(
    Category(
        "Riwayat dan Kontak",
        listOf(
            Question(
                id = "exposure",
                question = "Riwayat kontak/paparan dengan pasien TB?",
                options = listOf(
                    Option(0, "Tidak ada kontak/paparan", 0),
                    Option(1, "Tidak jelas atau tidak diketahui", 1),
                    Option(2, "Kontak dengan pasien TB BTA (-)", 2),
                    Option(3, "Kontak dengan pasien TB BTA (+)", 3)
                )
            )
        )
    ),
    Category(
        "Uji Tuberkulin",
        listOf(
            Question(
                id = "tuberculinTest",
                question = "Hasil Uji Tuberkulin (Mantoux)?",
                options = listOf(
                    Option(0, "Negatif (<5mm)", 0),
                    Option(1, "Meragukan (5-9mm)", 1),
                    Option(2, "Positif (\u226510mm) atau reaksi vesikular", 3)
                )
            )
        )
    ),
    Category(
        "Status Gizi",
        listOf(
            Question(
                id = "nutritionalStatus",
                question = "Berat badan/keadaan gizi?",
                options = listOf(
                    Option(0, "Gizi baik (BB/TB > 90%)", 0),
                    Option(1, "Gizi kurang (BB/TB 70-90%)", 1),
                    Option(2, "Gizi buruk (BB/TB < 70%)", 3)
                )
            )
        )
    ),
    Category(
        "Gejala Klinis",
        listOf(
            Question(
                id = "fever",
                question = "Demam tanpa sebab jelas \u2265 2 minggu?",
                options = listOf(
                    Option(0, "Tidak ada", 0),
                    Option(1, "Ada", 1)
                )
            ),
            Question(
                id = "cough",
                question = "Batuk kronik \u2265 2 minggu?",
                options = listOf(
                    Option(0, "Tidak ada", 0),
                    Option(1, "Ada", 1)
                )
            )
        )
    ),
    Category(
        "Pemeriksaan Fisik",
        listOf(
            Question(
                id = "lymphNodes",
                question = "Pembesaran kelenjar limfe (aksila, inguinal)?",
                options = listOf(
                    Option(0, "Tidak ada", 0),
                    Option(1, "Ada, ukuran kecil (< 2cm)", 1),
                    Option(2, "Ada, multipel atau besar (\u2265 2cm)", 3)
                )
            ),
            Question(
                id = "jointSwelling",
                question = "Pembengkakan tulang/sendi (panggul, lutut, falang)?",
                options = listOf(
                    Option(0, "Tidak ada", 0),
                    Option(1, "Ada", 3)
                )
            )
        )
    ),
    Category(
        "Pemeriksaan Penunjang",
        listOf(
            Question(
                id = "chestXray",
                question = "Foto toraks (rontgen dada)?",
                options = listOf(
                    Option(0, "Normal", 0),
                    Option(1, "Gambaran TB tidak jelas", 1),
                    Option(2, "Gambaran TB jelas", 3)
                )
            )
        )
    )
)

// Fungsi untuk menentukan tingkat risiko berdasarkan total skor
fun interpretRisk(totalScore: Int): RiskLevel = when {
    totalScore >= 6 -> RiskLevel.TINGGI   // skor 6 atau lebih = risiko tinggi
    totalScore >= 4 -> RiskLevel.SEDANG   // skor 4-5 = risiko sedang
    else -> RiskLevel.RENDAH              // skor di bawah 4 = risiko rendah
}

// Fungsi utama untuk menghitung skor dari jawaban yang diberikan
fun calculateScore(answers: Map<String, Int>): ScoreResult {
    var total = 0
    var max = 0

    // iterasi setiap kategori dan pertanyaannya
    for (category in assessmentCriteria) {
        for (q in category.questions) {
            // cari jawaban yang sesuai untuk pertanyaan ini
            val selectedValue = answers[q.id]
            val selectedOption = q.options.find { it.value == selectedValue }

            // tambahkan poin jawaban bila ada
            if (selectedOption != null) {
                total += selectedOption.points
            }

            // hitung poin maksimum dari setiap pertanyaan
            max += q.options.maxOf { it.points }
        }
    }

    // tentukan tingkat risiko berdasarkan total skor
    val risk = interpretRisk(total)

    // kembalikan hasil perhitungan
    return ScoreResult(total, max, risk)
}

// Contoh penggunaan fungsi di atas
fun main() {
    // Map berisi pasangan id pertanyaan dan nilai yang dipilih pengguna
    val sampleAnswers = mapOf(
        "exposure" to 3,         // contoh kontak dengan BTA (+)
        "tuberculinTest" to 2,   // hasil uji tuberkulin positif
        "nutritionalStatus" to 1,
        "fever" to 1,
        "cough" to 1,
        "lymphNodes" to 2,
        "jointSwelling" to 0,
        "chestXray" to 2
    )

    val result = calculateScore(sampleAnswers)

    // Tampilkan hasil akhir ke konsol
    println("Total Skor: ${result.totalScore} dari ${result.maxScore}")
    println("Risiko TB: ${result.riskLevel}")
}

