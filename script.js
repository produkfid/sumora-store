const scriptURL =
"https://script.google.com/macros/s/AKfycbw6PiyF_yJOZviKIq7IfX4Hzd2cFxydFvmvweeCt6D0n1_cmfWkO0yqzBdfOyxB-hBsqw/exec";

document
.getElementById("orderForm")
.addEventListener("submit", e => {

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
.then(response=>response.text())
.then(result=>{

document.getElementById("status")
.innerHTML =
"✅ Pesanan berhasil dikirim";

document.getElementById("statusOrder")
.innerHTML =
"⏳ Menunggu Konfirmasi Admin";

document.getElementById("historyList")
.innerHTML +=
`<li>${nama} - ${jumlah} Box (${pembayaran})</li>`;

document.getElementById("orderForm")
.reset();

})
.catch(error=>{

document.getElementById("status")
.innerHTML =
"❌ Gagal mengirim pesanan";

});

});
