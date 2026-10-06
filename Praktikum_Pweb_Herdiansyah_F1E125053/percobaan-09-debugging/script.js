const namaMahasiswa = "Herdiansyah";
console.log("Nama mahasiswa:", namaMahasiswa);

const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai (diperbaiki):", total);

function hitungRataRata(a, b) {
  return (a + b) / 2;
}
console.log("Rata-rata:", hitungRataRata(nilaiTugas, nilaiUts));