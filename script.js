const scriptURL =
"https://script.google.com/macros/s/AKfycbxWB-i2hyWcQbKMAinaernJu3QI4txb3cYK94ACkrscORSp4GnXyGI7zuhFMU23fFVQtg/exec";

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
.then(res=>res.text())
.then(data=>{

document.getElementById("status")
.innerHTML =
"✅ Pesanan berhasil dikirim";

document.getElementById("orderForm")
.reset();

})
.catch(err=>{

document.getElementById("status")
.innerHTML =
"❌ Gagal mengirim";

});

});

function cekStatus(){

let nama =
document.getElementById("cekNama").value;

fetch(
scriptURL +
"?nama=" +
encodeURIComponent(nama)
)

.then(res=>res.json())

.then(data=>{

if(data.status=="Tidak ditemukan"){

document.getElementById(
"hasilStatus"
).innerHTML =
"❌ Pesanan tidak ditemukan";

return;

}

document.getElementById(
"hasilStatus"
).innerHTML =

`
<p>👤 Nama : ${data.nama}</p>
<p>📦 Jumlah : ${data.jumlah} Box</p>
<p>💳 Pembayaran : ${data.pembayaran}</p>
<p>📍 Status : ${data.status}</p>
`;

});

}
