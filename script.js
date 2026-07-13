// Ganti dengan nomor WhatsApp Anda sendiri (gunakan format kode negara tanpa '+', misal 62)
const NOMOR_WHATSAPP = "6285211101811"; 

// Fungsi untuk menyalin nomor rekening
function copyRekening() {
    const noRek = document.getElementById("norek").innerText;
    navigator.clipboard.writeText(noRek).then(() => {
        alert("Nomor rekening berhasil disalin: " + noRek);
    }).catch(err => {
        console.error("Gagal menyalin text: ", err);
    });
}

// Fungsi untuk memformat dan mengirim pesan ke WhatsApp
function kirimWhatsApp() {
    const nama = document.getElementById("nama").value.trim();
    const nohp = document.getElementById("nohp").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const jumlah = document.getElementById("jumlah").value;

    // Validasi sederhana jika form ada yang kosong
    if (!nama || !nohp || !alamat || !jumlah) {
        alert("Mohon lengkapi semua data formulir terlebih dahulu!");
        return;
    }

    // Susun format teks pesan WhatsApp
    const teksPesan = `Halo Admin, saya ingin memesan PDH NU.\n\n` +
                      `*Detail Pesanan:*\n` +
                      `• Nama Lengkap: ${nama}\n` +
                      `• No HP Aktif: ${nohp}\n` +
                      `• Jumlah Pesanan: ${jumlah} pcs\n` +
                      `• Alamat Lengkap: ${alamat}\n\n` +
                      `Saya akan segera melakukan transfer ke rekening Sea Bank yang tertera. Terima kasih!`;

    // Encode teks agar bisa masuk ke URL WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NOMOR_WHATSAPP}&text=${encodeURIComponent(teksPesan)}`;

    // Buka tab baru menuju WhatsApp
    window.open(urlWhatsApp, '_blank');
}
