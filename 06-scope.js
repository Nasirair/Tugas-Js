/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript? 
** 3 (Bloks, Global Scop, Local Scope) **

/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript?
** Blocks adalah code yang berada didalam curly braces {} **
** Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file **
** Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping **

/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript!
** Implementasi blocks

** Implementasi Global Scope
let myName = 'Nasira' ;

fungction greeting () {
  return myName; // Nasira **
}

console.log.log(myName); // Nasira

** Implementasi Lokal Scope
// variabel declare in function blocks
fungction greeting() {
  let myName = 'Nasira' ; // Nasira **
}

console.log(greeting)()) //Nasira
console.log(myName) ; //uncaught ReferanceError : myName is not defined because local scope **

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
// Mariah 
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
// Tidak menampilkan nilai dari variable name karena yang dituliskan di console.log adalah mariah carey bukan console.log(printFirstName(name));

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));