// alert('Test');

// var namaVariable = '1234';
// document.write(typeof(namaVariable) + '<br>');
// var namaVariable = 1234;
// document.write(typeof(namaVariable) + '<br>');
// namaVariable = true;
// document.write(typeof(namaVariable));

// var namaPengunjung = prompt('Silahkan masukkan nama kamu',"Dojobers Setia");

// document.write('Hai ' + namaPengunjung + ', Selamat datang di Dojobox.id' + '<br>');

// var konfirmasi = confirm("Mau tetap disini kan?");
// var hasil = (konfirmasi==true)?  "Iya donk" : "Gak dulu ah.." ;
// document.write(hasil + '<br>');

// var angka = parseInt(prompt("masukkan angka yang mau ditest : "));

// if (angka>10){
//     document.write("Bilangan yang dimasukan lebih dari 10");
// }

// var nama = 'Andhika';
// if(nama=='Andika'){
//     document.write('Seorang mentor')
// }else{
//     document.write('Nama yang dimasukkan bukan Andika')
// }

// //if else if
// var nilai = prompt('masukkan angka :');
// if(nilai % 2 == 0){
//     document.write(nilai + " merupakan bilangan genap")
// }else if(nilai % 2 == 1){
//     document.write(nilai + " merupakan bilangan ganjil")
// }else{
//     document.write(nilai + " bukan merupakan bilangan")
// }

//Switch
// var nilaiKepuasan = prompt('Masukkan nilai kepuasan Anda','0-5');

// switch(nilaiKepuasan){
//     case '0':
//         document.write('Saya sangat kecewa')
//         break
//     case '1':
//         document.write('Saya kecewa')
//         break
//     case '2':
//         document.write('Saya tidak puas')
//         break
//     case '3':
//         document.write('Saya puas')
//         break
//     case '4':
//         document.write('Saya sangat puas')
//         break
//     case '5':
//         document.write('Saya terkesan')
//         break
//     default :
//         document.write('Tolong tuliskan range angka yang sesuai')
// }


// var nilaiUjian = parseInt(prompt('Masukkan nilai Anda','0-100'));

// switch(true){
//     case (nilaiUjian>=90):
//         document.write('Grade A');
//         break;
//     case (nilaiUjian>=80):
//         document.write('Grade B');
//         break;
//     case (nilaiUjian>=70):
//         document.write('Grade C');
//         break;
//     case (nilaiUjian>=60):
//         document.write('Grade D');
//         break;
//     default :
//         document.write('Tolong tuliskan range angka yang sesuai')
// }


//Pengkondisian
// var angka = 20;
// if(angka % 2 === 0){
//     //kondisi true
//     document.write(angka + ' merupakan bilangan genap')
// }else if(angka % 2 === 1){
//     //kondisi false
//     document.write(angka + ' merupakan bilangan ganjil')
// }else{
//     document.write(angka + ' bukan merupakan bilangan ganjil')
// }


//Looping
//While
// var ulang = 1;

// while(ulang<=10){
//     document.write('Hallo Dojobers' + '<br>');
//         ulang += 1;
// }

//For
// for(var i = 0; i < 10; i++){
//     document.write("Hai Dojobers" + "<br")
// }

//Looping
// While
// var siswa = 1;

// while(siswa<=5){
//     document.write('Siswa dengan NIK :  '+ siswa + ', TA Intan' +'<br>' );
//     siswa +=1;
// }

// for(var i = 6; i <= 10; i++){
//     document.write('Siswa dengan NIK : ' + i + ', TA Intan' +'<br>')
// }


//Array
var buah = [];
buah = ['apel', 'belimbing', 'cempedak', 'duku', 'salak', 'pisang'];

document.write(typeof(buah) + '<br>');
document.write(buah);
document.write('<br>');
document.write(buah.length);
document.write('<br>');
document.write(buah[4]);
document.write('<br>');

//tambah data
// buah[6] = 'mangga';
//tambah dibelakang
// buah.push('anggur');
// //tambah didepan
// buah.unshift('jeruk');

// document.write(buah);

////1. join
//document.write(buah.join('<br>'));

////2. push dan pop bekerja diakhir elemnt
// buah.push('duren');
// document.write(buah);
// buah.pop();
// document.write(buah);

////2. unshift dan shift bekerja diawal elemnt
// buah.unshift('jambu');
// document.write(buah);
// buah.shift();
// document.write(buah);

//// 4. Splice
////splice() digunakan untuk menyambung  atau menyisipkan elemen di tengah-tengah
// buah.splice(3, 2, 'timun')
// document.write(buah);
// //5. Slice
// //string.slice()berfungsi untuk ‘memotong’ string menjadi string baru.
// var newBuah = buah.slice(1,2);
// document.write('<br>');
// document.write('<br>');

// document.write(newBuah.join('<br>'));

// //6. for each dan map
// //Perulangan forEach biasanya digunakan untuk mencetak item didalam array.
buah.forEach(function(e, i){
    document.write(i + ' = ' + e + '<br>')
})

document.write('<br>');
document.write('<br>');

buah.forEach(function(e, i){
    document.write((i+1) + '. ' + e + '<br>')
})

//map
//method map() adalah metode yang digunakan untuk mengembalikan nilai array.
var buahBaru = buah.map(function(e,i){
    return e + ' enak dimakan'
})

document.write('<br>');
document.write('<br>');

document.write(buahBaru.join('<br>'));



// var iniAdalahFungsi = function(){
//     alert('Hai Dojober');
// }

// var myArr = ['teks', 1234, true, iniAdalahFungsi, [2,3,4]];
// document.write('<br>');
// document.write(myArr[4][1]);

// myArr2 = [];
// myArr2[0] = 'senin';
// myArr2[1] = 'selasa';
// // myArr2[2] = empty
// myArr2[3] = 'kamis';



