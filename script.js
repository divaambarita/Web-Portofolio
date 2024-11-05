function validasiDanKirim() {
    document.getElementById("namaError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("teleponError").innerText = "";
    document.getElementById("pesanError").innerText = "";

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const pesan = document.getElementById("pesan").value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const polaTelepon = /^[0-9]{10,13}$/;

    let isValid = true;

    if (!nama) {
        document.getElementById("namaError").innerText = "Nama harus diisi.";
        isValid = false;
    }

    if (!email) {
        document.getElementById("emailError").innerText = "Email harus diisi.";
        isValid = false;
    } else if (!polaEmail.test(email)) {
        document.getElementById("emailError").innerText = "Format email tidak valid.";
        isValid = false;
    }

    if (!telepon) {
        document.getElementById("teleponError").innerText = "Nomor HP harus diisi.";
        isValid = false;
    } else if (!polaTelepon.test(telepon)) {
        document.getElementById("teleponError").innerText = "Format nomor HP tidak valid. Harus 10-13 angka.";
        isValid = false;
    }

    if (!pesan) {
        document.getElementById("pesanError").innerText = "Pesan harus diisi.";
        isValid = false;
    }

    if (isValid) {
        const pesanWhatsapp = `Halo, saya ${nama}.%0AEmail: ${email}%0ANomor HP: ${telepon}%0APesan: ${pesan}`;
        const urlWhatsapp = `https://wa.me/6283197035306?text=${pesanWhatsapp}`;
        
        window.open(urlWhatsapp, "_blank");
    }
}
