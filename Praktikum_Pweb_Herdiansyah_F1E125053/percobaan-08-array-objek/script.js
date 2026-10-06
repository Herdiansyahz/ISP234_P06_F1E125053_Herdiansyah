// Array of Object yang merepresentasikan data mahasiswa[cite: 42, 43]
const mahasiswa = [
    { nama: "Ayu", prodi: "Sistem Informasi", nilai: 88 },
    { nama: "Bima", prodi: "Sistem Informasi", nilai: 76 },
    { nama: "Citra", prodi: "Sistem Informasi", nilai: 91 },
    { nama: "Dedi", prodi: "Sistem Informasi", nilai: 64 },
    { nama: "Herdiansyah", prodi: "Sistem Informasi", nilai: 95 }
];

// Fungsi untuk menentukan status kelulusan berdasarkan nilai[cite: 42]
function tentukanStatus(nilai) {
    return nilai >= 65 ? "Lulus" : "Belum Lulus";
}

// Fungsi untuk menghitung rata-rata nilai menggunakan perulangan (loop)[cite: 42]
function hitungRataRata(dataMahasiswa) {
    let total = 0;
    for (let i = 0; i < dataMahasiswa.length; i++) {
        total += dataMahasiswa[i].nilai;
    }
    return total / dataMahasiswa.length;
}

// Eksekusi fungsi kalkulasi data
const rataRata = hitungRataRata(mahasiswa);

// Menggunakan method filter untuk menghitung jumlah mahasiswa yang lulus (nilai >= 65)[cite: 43]
const jumlahLulus = mahasiswa.filter((item) => item.nilai >= 65).length;

// Merender bagian ringkasan statistik ke dalam elemen HTML[cite: 42, 43]
const ringkasan = document.getElementById("ringkasan");
ringkasan.innerHTML = `
    <article>
        <p>Total Mahasiswa</p>
        <strong>${mahasiswa.length}</strong>
    </article>
    <article>
        <p>Rata-rata Nilai</p>
        <strong>${rataRata.toFixed(1)}</strong>
    </article>
    <article>
        <p>Jumlah Lulus</p>
        <strong>${jumlahLulus}</strong>
    </article>
`;

// Merender daftar kartu mahasiswa secara dinamis menggunakan perulangan[cite: 43]
const daftar = document.getElementById("daftar");
for (let i = 0; i < mahasiswa.length; i++) {
    const item = mahasiswa[i];
    const status = tentukanStatus(item.nilai);
    const statusClass = item.nilai >= 65 ? "status-lulus" : "status-belum";

    daftar.innerHTML += `
        <article class="card">
            <span class="badge">${item.prodi}</span>
            <h3>${item.nama}</h3>
            <p>Nilai: <strong>${item.nilai}</strong></p>
            <p>Status: <span class="${statusClass}">${status}</span></p>
        </article>
    `;
}

// Mencetak log tabel rekap data ke Console untuk keperluan debugging[cite: 43]
console.table(mahasiswa);
console.log("Rata-rata nilai keseluruhan:", rataRata);
console.log("Jumlah mahasiswa lulus:", jumlahLulus);