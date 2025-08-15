// Nama di Home Section
const nameInput = document.getElementById('name');
const userNameDisplay = document.getElementById('userName');

nameInput.addEventListener('input', function () {
    userNameDisplay.textContent = this.value.trim() || 'Guest';
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validasi
    if (!name || !email || !phone || !message) {
        alert("⚠️ Semua field harus diisi!");
        return;
    }

    if (!validateEmail(email)) {
        alert("⚠️ Format email tidak valid!");
        return;
    }

    if (!/^[0-9]+$/.test(phone)) {
        alert("⚠️ Nomor telepon harus angka!");
        return;
    }

    // Tampilkan hasil
    formResult.innerHTML = `
        <h3>✅ Data Berhasil Dikirim!</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    contactForm.reset();
    userNameDisplay.textContent = 'Guest';
});

// Validasi Email
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Update Waktu
function updateTime() {
    document.getElementById('currentTime').textContent = new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
