console.log("=== JavaScript Fundamental ===");
let namaMahasiswa = "Herdiansyah";
let nilaiUts = 82; let nilaiUas = 90;
const bobotUts = 0.4; const bobotUas = 0.6;
let nilaiAkhir = (nilaiUts * bobotUts) + (nilaiUas * bobotUas);
console.log("Nama:", namaMahasiswa);
console.log("Nilai akhir:", nilaiAkhir);

if (nilaiAkhir >= 85) {
  console.log("Predikat: Sangat Baik");
} else {
  console.log("Predikat: Baik");
}