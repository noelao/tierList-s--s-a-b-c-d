const fs = require('fs');
const path = require('path');

const imageFolder = './images'; // folder gambar
const outputFile = './images.json';

// Membaca isi folder
fs.readdir(imageFolder, (err, files) => {
    if (err) return console.error("Gagal membaca folder:", err);

    // Filter hanya file .webp
    const webpFiles = files.filter(file => path.extname(file).toLowerCase() === '.webp');

    // Tulis ke file JSON
    fs.writeFileSync(outputFile, JSON.stringify(webpFiles, null, 2));
    console.log(`Berhasil! ${webpFiles.length} gambar ditemukan dan disimpan ke images.json`);
});