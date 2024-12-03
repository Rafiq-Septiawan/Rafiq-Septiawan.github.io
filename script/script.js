// Validate Form
function ValidateForm(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const email = document.getElementById('exampleInputEmail1').value.trim();
    const kritikSaran = document.getElementById('kritikSaran').value.trim();

    // Validasi apakah email dan kritik saran kosong
    if (!email || !kritikSaran) {
        alert("Semua kolom wajib diisi.");
        return false;
    }

    // Validasi format email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Masukkan format email yang valid!");
        return false;
    }

    alert("Kritik & Saran berhasil dikirimkan!");
    return true;
}
