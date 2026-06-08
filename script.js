const scriptURL =
"https://script.google.com/macros/s/AKfycbzuVDMg6zbKl3BD1qdzWOljh733ANn1IPVj0teag-OPjS-hMPUbpt6M6xDsMIw_lHcZ8g/exec";

document
.getElementById("orderForm")
.addEventListener("submit", e => {

e.preventDefault();

const data = {
nama:
document.getElementById("nama").value,

jumlah:
document.getElementById("jumlah").value,

pembayaran:
document.getElementById("pembayaran").value
};

fetch(scriptURL,{
method:"POST",
body:JSON.stringify(data)
})
.then(response=>response.text())
.then(result=>{

document.getElementById("status")
.innerHTML =
"✅ Pesanan berhasil dikirim";

document.getElementById("orderForm")
.reset();

})
.catch(error=>{

document.getElementById("status")
.innerHTML =
"❌ Gagal mengirim";

});

});
