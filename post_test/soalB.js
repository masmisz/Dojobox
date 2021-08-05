// Soal B
// Buatlah sebuah program pembelian elektronik sederhana dengan ketentuan sebagai berikut :
// 1. Terdapat array yang digunakan untuk menyimpan data barang elektronik. Silahkan isi array dengan 5 jenis barang (bebas)
// 2. Terdapat 4 macam inputan yaitu, Nama barang, Jumlah barang, Harga barang, dan Discount
// 3. Output yang diharapkan dari program ini adalah sebagai berikut 


var barangElektronik = ['Televisi', 'Radio', 'Monitor', 'Sound', 'Tape'];

var namaBarang = prompt('Masukkan nama barang:');
var hargaBarang = parseInt(prompt('Masukkan harga barang:'));
var jumlahBarang = parseInt(prompt('Masukkan jumlah barang:'));
var i = prompt ('% diskon:');
var discount = (i / 100 ) * jumlahBarang * hargaBarang;
var totalHarga = hargaBarang * jumlahBarang;
var total  = totalHarga - discount;

document.write('Nama Barang : ' + namaBarang +'<br>');
document.write('Harga Barang : ' + hargaBarang +'<br>');
document.write('Jumlah Barang : ' + jumlahBarang +'<br>');
document.write('Discount  : ' + discount +'<br>');
document.write('Total : Rp. ' + total +'<br>');



// 4. Apabila Nama barang yang diinputkan oleh user tidak ada didalam array, maka output yang diharapkan adalah sebagai berikut




// var barangElektronik2 = barangElektronik.find(function(i){
//     return i != barangElektronik
// })
// console.log (barangElektronik2)

// Note :
// Besaran discount dapat berubah-ubah sesuai dengan inputan user, sehingga tidak harus sama (Discount 40%) seperti pada contoh output diatas. 