const scriptURL =
"https://script.google.com/macros/s/AKfycbxJGzp9ideUejIwp1scf2X7aPldqq-e5kEDackodUh_EnYQhsJU41ylZKWT86ZcVOdDyw/exec";

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
