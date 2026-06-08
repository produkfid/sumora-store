const scriptURL =
"https://script.google.com/macros/s/AKfycbxWB-i2hyWcQbKMAinaernJu3QI4txb3cYK94ACkrscORSp4GnXyGI7zuhFMU23fFVQtg/exec";

// KIRIM PESANAN
document.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nama =
    document.getElementById("nama").value;

    let jumlah =
    document.getElementById("jumlah").value;

    let pembayaran =
    document.getElementById("pembayaran").value;

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
            nama: nama,
            jumlah: jumlah,
            pembayaran: pembayaran
        })
    })

    .then(response => response.text())

    .then(data => {

        document.getElementById("status")
        .innerHTML =
        "✅ Pesanan berhasil dikirim";

        document.getElementById("orderForm")
        .reset();

    })

    .catch(error => {

        console.error(error);

        document.getElementById("status")
        .innerHTML =
        "❌ Gagal mengirim pesanan";

    });

});


// CEK STATUS
function cekStatus(){

    let nama =
    document.getElementById("cekNama").value;

    fetch(
        scriptURL +
        "?nama=" +
        encodeURIComponent(nama)
    )

    .then(response => response.json())

    .then(data => {

        if(data.status === "Tidak ditemukan"){

            document.getElementById("hasilStatus")
            .innerHTML =
            "❌ Pesanan tidak ditemukan";

            return;
        }

        document.getElementById("hasilStatus")
        .innerHTML =

        `
        <div style="text-align:left">
        <p><b>👤 Nama:</b> ${data.nama}</p>
        <p><b>📦 Jumlah:</b> ${data.jumlah} Box</p>
        <p><b>💳 Pembayaran:</b> ${data.pembayaran}</p>
        <p><b>📍 Status:</b> ${data.status}</p>
        </div>
        `;
    })

    .catch(error => {

        document.getElementById("hasilStatus")
        .innerHTML =
        "❌ Gagal mengambil status";

    });

}
