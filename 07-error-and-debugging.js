/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// 1. Type Error mewakili kesalahan ketika operasi tidak dapat dilakukan, tetapi tidak secara eksklusif ketika nilai bukan dari jenis yang diharapkan.
// 2. Syntax Error menunjukkan kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis 
// 3. Range Error menunjukkan kesalahan ketika nilai tidak dalam set atau rentang nilai yang diizinkan 
// 4. Reference Error mewakili kesalahan ketika variabel yang tidak ada direferensikan 


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// 1. saat saya menjalankan code tersebut standar outpunya undefined, tetapi standard erronya error 
// 2. console.log(salaryWithConst) yaitu di kode pertama dia termasuk Reference Error 
// 3. 