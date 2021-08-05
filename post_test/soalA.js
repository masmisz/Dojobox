// Soal A.
// Buatlah sebuah program untuk membantu seorang pustakawan dalam mengelola sebuah rak dengan ketentuan sebagai berikut :
// 1. Membuat pilihan menu dimana pustakawan bisa menambah buku, meminjamkan buku, mengembalikan buku, dan mengganti buku.
var rakBuku = [];
var rakBuku = ['Buku1', 'Buku2', 'Buku3', 'Buku4', 'Buku5'];
document.write(rakBuku);

//menambah buku
rakBuku.push('Buku6');
// meminjam buku
rakBuku.pop();
// mengembalikan rakBuku
rakBuku[5] = 'Buku6';
//mengganti buku
rakBuku.splice(5,1,'Book6');
// meminjam buku
rakBuku.pop();
document.write('<br>', '<br>')



// 2. Membuat sebuah rak dengan array yang memuat 5 buku. Lalu dengan menggunakan function, tambahkan 5 buku dengan judul bebas.
//tambah rak dengan memuat 5 buku
document.write('Tambah rak yang memuat 5 buku' + '<br>')
var rakBuku2 = [];
rakBuku2 = ['Buku6','Buku7','Buku8','Buku9','Buku10']
document.write(rakBuku2)

// 3. Membuat sebuah function yang memungkinkan pustakawan meminjam buku dimana apabila terdapat buku yang dipinjam, tempat yang ditinggalkan buku tersebut dibiarkan kosong. 
//Pinjam buku nomor 2, di rak1
document.write('<br>', '<br>')
document.write('Meminjam buku nomor 2 dan 4 di rak 1' + '<br>')
rakBuku.splice(1,1,'')
rakBuku.splice(3,1,'')
document.write(rakBuku.join('<br>'))

// 4. Membuat function untuk mengembalikan buku sesuai dengan rak kosong seperti ilustrasi sebelumnya.
//kembali buku nomor 2 ke dalam rak
document.write('<br>', '<br>')
document.write('Kembalikan buku nomor 2 dan 4 ke dalam rak 1' + '<br>')


rakBuku.splice(1,1,'Buku2')
rakBuku.splice(3,1,'Buku4')
document.write(rakBuku.join('<br>'))

// 5. Membuat sebuah function yang memungkinkan pustakawan mengganti koleksi buku yang sudah ada. 
//mengganti koleksi buku
document.write('<br>', '<br>')
document.write('Mengganti koleksi buku nomor 2 dengan Buku Baru ke rak 1' + '<br>')
rakBuku.splice(1,1,'Buku Baru')
document.write(rakBuku.join('<br>'))

