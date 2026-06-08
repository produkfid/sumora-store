const scriptURL =
"https://script.google.com/macros/s/AKfycbwmnAKuqJ55C5CvVSpuuXEl9BG5FAKW0hRCjas_0r1Ws6bQOBATOkfIruj9LfXLBH7JSA/exec";

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

    fetch(scriptURL,{
        method:"POST",
        body:JSON.stringify({
            nama:nama,
            jumlah:jumlah,
            pembayaran:pembayaran
        })
    })

    .then(response => response.json())

    .then(data => {

        document.getElementById("status")
        .innerHTML =
        "✅ Pesanan berhasil dikirim";

        document.getElementById("orderForm")
        .reset();

    })

    .catch(error => {

        console.log(error);

        document.getElementById("status")
        .innerHTML =
        "❌ Gagal mengirim pesanan";

    });

});


// CEK STATUS PESANAN
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
        <p><b>👤 Nama:</b> ${data.nama}</p>
        <p><b>📦 Jumlah:</b> ${data.jumlah} Box</p>
        <p><b>💳 Pembayaran:</b> ${data.pembayaran}</p>
        <p><b>📍 Status:</b> ${data.status}</p>
        `;

    })

    .catch(error => {

        document.getElementById("hasilStatus")
        .innerHTML =
        "❌ Gagal mengambil status";

    });

}
