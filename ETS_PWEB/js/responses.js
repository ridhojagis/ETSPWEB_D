function getBotResponse(input) {
    if (input == "halo") {
        return "Halo AutoFamily. Terima kasih telah menghubungi Auto2000 Digiroom - 'The first Toyota Showroom in Your Pocket'. Perkenalkan nama saya Tasia. ada yang bisa Tasia Bantu?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "Informasi Produk"){
        return "Model mobil apa yang Auto Family cari? Misal : Avanza. Innova"
    }else {
        return "Mohon maaf untuk saat ini, info yang Auto Family butuhkan dapat dibantu oleh Tasia.";
    }
}