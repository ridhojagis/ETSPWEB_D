function getBotResponse(input) {
    if (input == "halo") {
        return "Halo AutoFamily. Terima kasih telah menghubungi Auto2000 Digiroom - 'The first Toyota Showroom in Your Pocket'. Perkenalkan nama saya Tasia. \nSilahkan ketik \"FAQ\" untuk mengetahui informasi lebih lanjut atau \"goodbye\" untuk mengakhiri percakapan";
    } else if (input == "FAQ"){
        return "Silahkan ketik pilihan berikut untuk informasi yang ingin diketahui: \n \"Informasi Produk\" \"Benefit Service\" ";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "Informasi Produk"){
        return "Model mobil yang tersedia saat ini: \n Alphard,Avanza,Yaris,Fortuner"
    } else if (input == "Benefit Service"){
        return "Berkaitan dengan benefit, Bpk/Ibu akan mendapatkan free oil di Auto2000 apabila melakukan booking service secara Online dan/atau datang booking secara Ontime. Selain itu juga Bpk/Ibu bisa mendapatkan banyak fasilitas saat datang di Cabang/bengkel A2000 dan juga kemudahan lain yg misalnya layanan Toyota Home Service"
    }else {
        return "Mohon maaf untuk saat ini, info yang Auto Family butuhkan dapat dibantu oleh Tasia.";
    }
}