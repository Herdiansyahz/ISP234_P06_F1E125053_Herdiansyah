function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}
function hitungDiskon(total) {
  if (total >= 200000) return 0.2;
  else if (total >= 100000) return 0.1;
  else return 0;
}
document.getElementById("formBelanja").addEventListener("submit", function(e) {
  e.preventDefault();
  const namaBarang = document.getElementById("namaBarang").value;
  const harga = Number(document.getElementById("harga").value);
  const jumlah = Number(document.getElementById("jumlah").value);

  if (harga <= 0 || jumlah <= 0) {
    alert("Harga dan jumlah harus lebih dari 0");
    return;
  }

  const total = hitungTotal(harga, jumlah);
  const diskonPersen = hitungDiskon(total);
  const diskon = total * diskonPersen;
  const bayar = total - diskon;

  const hasil = document.getElementById("hasil");
  hasil.innerHTML = `
    <h2>Hasil Perhitungan</h2>
    <p>Barang: ${namaBarang}</p>
    <p>Harga Satuan: Rp ${harga.toLocaleString('id-ID')}</p>
    <p>Jumlah: ${jumlah}</p>
    <p>Total: Rp ${total.toLocaleString('id-ID')}</p>
    <p>Diskon: ${diskonPersen * 100}% (Rp ${diskon.toLocaleString('id-ID')})</p>
    <p><strong>Total Bayar: Rp ${bayar.toLocaleString('id-ID')}</strong></p>
  `;
});