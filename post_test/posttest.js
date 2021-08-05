// Soal A.
// Buatlah sebuah program untuk membantu seorang pustakawan dalam mengelola sebuah rak dengan ketentuan sebagai berikut :
// 1. Membuat pilihan menu dimana pustakawan bisa menambah buku, meminjamkan buku, mengembalikan buku, dan mengganti buku.
// 2. Membuat sebuah rak dengan array yang memuat 5 buku. Lalu dengan menggunakan function, tambahkan 5 buku dengan judul bebas.
// 3. Membuat sebuah function yang memungkinkan pustakawan meminjam buku dimana apabila terdapat buku yang dipinjam, tempat yang ditinggalkan buku tersebut dibiarkan kosong. 



// var rakBuku = ['Buku1', 'Buku2', 'Buku3', 'Buku4', 'Buku5'];
// document.write(rakBuku);

// function pinjamBuku(params) {
    
// }




// 4. Membuat function untuk mengembalikan buku sesuai dengan rak kosong seperti ilustrasi sebelumnya.
// 5. Membuat sebuah function yang memungkinkan pustakawan mengganti koleksi buku yang sudah ada. 






// Soal B
// Buatlah sebuah program pembelian elektronik sederhana dengan ketentuan sebagai berikut :
// 1. Terdapat array yang digunakan untuk menyimpan data barang elektronik. Silahkan isi array dengan 5 jenis barang (bebas)
// 2. Terdapat 4 macam inputan yaitu, Nama barang, Jumlah barang, Harga barang, dan Discount
// 3. Output yang diharapkan dari program ini adalah sebagai berikut 


// var barangElektronik = ['Televisi', 'Radio', 'Monitor', 'Sound', 'Tape'];
var namaBarang = prompt('Masukkan nama barang:');
var hargaBarang = parseInt(prompt('Masukkan harga barang:'));
var jumlahBarang = parseInt(prompt('Masukkan jumlah barang:'));
var i = prompt ('% diskon:');
var discount = i * hargaBarang / 100;
var total  = hargaBarang - discount;

document.write('Nama Barang : ' + namaBarang +'<br>');
document.write('Harga Barang : ' + hargaBarang +'<br>');
document.write('Jumlah Barang : ' + jumlahBarang +'<br>');
document.write('Discount  : ' + discount +'<br>');
document.write('Total : Rp. ' + total +'<br>');



// 4. Apabila Nama barang yang diinputkan oleh user tidak ada didalam array, maka output yang diharapkan adalah sebagai berikut

// var barangElektronik2 = barangElektronik.find(function(i){
//     return i 
// })
// Note :
// Besaran discount dapat berubah-ubah sesuai dengan inputan user, sehingga tidak harus sama (Discount 40%) seperti pada contoh output diatas. 