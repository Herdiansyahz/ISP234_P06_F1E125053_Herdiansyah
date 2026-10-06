// Fungsi untuk menghitung nilai akhir berdasarkan bobot (Tugas 30%, UTS 30%, UAS 40%)[cite: 40]
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// Fungsi untuk menentukan grade berdasarkan nilai akhir[cite: 40]
function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return "A";
    else if (nilaiAkhir >= 75) return "B";
    else if (nilaiAkhir >= 65) return "C";
    else if (nilaiAkhir >= 55) return "D";
    else return "E";
}

// Menangkap event submit dari form HTML
document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form melakukan refresh halaman

    // Mengambil data input dan mengonversinya menjadi Number (Mencegah bug string concatenation)[cite: 41, 44]
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Validasi sederhana nilai rentang 0 - 100
    if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Peringatan: Nilai harus berada dalam rentang 0 sampai 100!");
        return;
    }

    // Proses kalkulasi logika
    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const grade = tentukanGrade(nilaiAkhir);
    const status = nilaiAkhir >= 65 ? "Lulus" : "Belum Lulus";
    const statusClass = nilaiAkhir >= 65 ? "status-lulus" : "status-remedial";

    // Membentuk Objek Mahasiswa sesuai anjuran modul[cite: 41]
    const mahasiswa = {
        nama: nama,
        tugas: tugas,
        uts: uts,
        uas: uas,
        nilaiAkhir: nilaiAkhir,
        grade: grade,
        status: status
    };

    // Cetak objek dan data log ke Console untuk verifikasi/debugging[cite: 41, 46]
    console.log("Data Hasil Perhitungan Objek Mahasiswa:", mahasiswa);

    // Merender hasil ke panel output HTML secara dinamis menggunakan template literal
    const hasilPanel = document.getElementById("hasilPanel");
    hasilPanel.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <div class="result-content">
            <h3>Mahasiswa: <strong>${mahasiswa.nama}</strong></h3>
            <div class="score-display">${mahasiswa.nilaiAkhir.toFixed(1)}</div>
            <span class="status-badge ${statusClass}">Status: ${mahasiswa.status}</span>
            
            <div class="detail-list">
                <div class="detail-item"><span>Grade Huruf:</span> <strong>${mahasiswa.grade}</strong></div>
                <div class="detail-item"><span>Nilai Tugas (30%):</span> <strong>${mahasiswa.tugas}</strong></div>
                <div class="detail-item"><span>Nilai UTS (30%):</span> <strong>${mahasiswa.uts}</strong></div>
                <div class="detail-item"><span>Nilai UAS (40%):</span> <strong>${mahasiswa.uas}</strong></div>
            </div>
        </div>
    `;
});