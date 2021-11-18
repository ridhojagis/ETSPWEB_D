function getBotResponse(input) {
    if (input == "halo") {
        return "Halo Guest. Terima kasih telah menghubungi Auto2000. Perkenalkan nama saya CSsupport. Ada yang bisa saya bantu?";
    } else if (input == "sampai jumpa") {
        return "Terima kasih telah menghubungi Auto2000, Sampai jumpa semoga hari-hari anda menyenangkan";
    } else if (input == "Cek Promo Menarik"){
        return "Untuk Promo Menarik di Bulan ini, Kami Memberikan 1 Unit Mobil Toyota Innova dengan Harga yang menarik yaitu Rp 100.000.000";
    } else if (input == "Cek Servis dan Perawatan"){
        return "Untuk model-model baru seperti Agya, Calya, Sienta, Innova, dan Fortuner mendapatkan program servis gratis untuk jarak tempuh 50.000 km atau kurun waktu 4 tahun.Jika ingin mengetahui info yang lebih lanjut dapat menghubungi kami dengan cara mengklik Cek Servis dan Perawatan di atas. ";
    }else {
        return "Mohon maaf untuk saat ini, info yang Auto Family butuhkan dapat dibantu oleh Tasia.";
    }
}